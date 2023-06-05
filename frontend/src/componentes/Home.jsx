import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import '../Hojas_css/home.css';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom';

const Home = () => {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    // Configuración de Glide.js
    new Glide(sliderRef.current, {
      type: 'carousel',
      autoplay: 2000,
      animationDuration: 300,
      perView: 1,
      focusAt : 'center',
      pagination: {
        el: paginationRef.current,
        
      },
    }).mount();
  }, []);

  return (
    <>
      <div className="slider-container" ref={sliderRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src="/images/slide/slide-1.jpg" alt="slide-1" />
            </li>
            <li className="glide__slide">
              <img src="/images/slide/slide-2.jpg" alt="slide-2" />
            </li>
            <li className="glide__slide">
              <img src="/images/slide/slide-3.jpg" alt="slide-3" />
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
      <section className="productos-destacados-container">
        <h3>Productos destacados</h3>
        <ItemListContainer />
        <button className="ver-todos">
          <Link className="link-ver-todos" to="/productos">
            VER TODOS LOS PRODUCTOS
          </Link>
        </button>
      </section>
    </>
  );
};

export default Home;