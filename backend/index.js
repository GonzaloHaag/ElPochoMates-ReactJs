// const express = require('express');
// const morgan = require('morgan');
// const mercadopago = require('mercadopago'); 

// require('dotenv').config(); //Para poder utilizar el archivo .env


// const server = express();

// server.use(express.json()); //Para poder aceptar archivos json y poder recibir body
// server.use(morgan('dev'))

// server.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


// mercadopago.configure({
//     access_token : process.env.MERCADOPAGO_KEY
// })

// server.post('/payment',(req,res)=>{
//     /*
//     abrir insomnia y hacer un post a 
//     http://localhost:3001/payment a ver si funciona,
//     tendria que devolvernos Funciona! */
//     // res.status(200).send("Funciona!");

//     const producto = req.body; //Aca me llega el producto
    
//     let preference = {
//         items:[
//             {
//                 id:producto.id,
//                 title : producto.titulo,
//                 currency_id:'ARS',
//                 picture_url: producto.imagen,
//                 description: producto.descripcion,
//                 category_id : 'mate',
//                 quantity : producto.cantidad, 
//                 unit_price : producto.precio //Este es el precio unitario, si agrego 2 ya se multiplica y me hace el precio total
//             }
//         ],
//     back_urls : {
//         success : 'http://localhost:3000',
//         failure : '',
//         pending : '',
//     },
//     auto_return :'approved',
//     binary_mode : true, //Para no aceptar pagos pendientes, no aceptar rapipago, o efectivo
//     }

//     mercadopago.preferences.create(preference)
//     .then((response)=> {
//         res.status(200).send({response}) //Esto es lo que se envia al front

//     })
//    .catch((error)=>{
//     res.status(400).send({error:error.message});
//    })
//    /*
//    Al hacerle un post a esta url recibiremos una response
//    Solo nos interesa el init point que nos dirige al pago segun 
//    el producto que pase en preference
//    */
// })
// server.listen(3001,()=>{
//     console.log('Server escuchando en puerto: 3001')
// })
const express = require('express');
const morgan = require('morgan');
const mercadopago = require('mercadopago');

require('dotenv').config();

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_KEY,
});

server.post('/payment', (req, res) => {
  const { carrito, precioTotal } = req.body;

  let items = carrito.map((prod) => ({
    title: prod.titulo,
    unit_price: prod.precio,
    quantity: prod.cantidad,
  }));

  let preference = {
    items: items,
    back_urls: {
      success: 'http://localhost:3000',
      failure: '',
      pending: '',
    },
    auto_return: 'approved',
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).send({ response });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
});

server.use(express.static('../frontend/src/App.js'))

server.listen(3001, () => {
  console.log('Server escuchando en puerto: 3001');
});


