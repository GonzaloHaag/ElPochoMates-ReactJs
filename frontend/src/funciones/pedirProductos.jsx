import productos from '../productos/productos.json';

export const pedirProductos = () => {
    return new Promise((resolve,reject) => {
       
        setTimeout (()=> {
            resolve(productos); //Para resolver esto en 500 milisegundos
        },500)
    })
}
//Para el ver mas de cada producto : 

export const pedirProductoPorId = (id) => {
    return new Promise((resolve,reject)=> {
        const producto = productos.find((elemento) => elemento.id === id);

        if(producto) {
            resolve(producto)
        }
        else {
            reject({
                error:"No se encontro el producto"
            })
        }
    })
}