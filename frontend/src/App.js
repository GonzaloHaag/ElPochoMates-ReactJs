
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import ItemListContainer from './componentes/ItemListContainer';
import Footer from './componentes/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Carrito from './componentes/Carrito';





function App() {

  return (
    <div className='app-container'>
      <CartProvider>
      <BrowserRouter>
      <Header/> {/*Fuera del routes asi aparece en todas las pag -> Le mando inicio como paramtetro*/}
      <Routes>
      {/*Luego armar la route de inicio asi le pongo que el elemento sea el main principal*/}
      <Route path='/' element = {<Home/>} /> 
      <Route path='/productos' element = {<ItemListContainer/>} />
      <Route path='/productos/mates' element = {<ItemListContainer/>} />
      <Route path='/productos/:categoria' element = {<ItemListContainer/>} /> {/*Recordar poner en los link de las categorias productos/mate-pampa, si no no lo toma*/}
      <Route path='/item/:id' element = {<ItemDetailContainer />} />
      <Route path= '/carrito' element = {<Carrito />} />
      </Routes>
      <Footer/> {/*Fuera del routes asi es fijo en todas las paginas*/}
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
