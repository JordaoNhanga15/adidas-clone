import React from 'react';
import Logo from './assets/logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import {BsGrid3X3Gap,BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import first from './assets/first1.jpg'
import two from './assets/second.jpg'
import three from './assets/threty.jpg'
// import img_back from './assets/img_back.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <aside className='lado-a'>
        <img src={Logo} alt='' />
      </aside>
      <aside className='lado-b'>
        <div className='menu'>
        <ul className='menu-bar'>
          <li><a href='d'>home</a></li>
          <li><a href='d'>man</a></li>
          <li><a href='d'>woman</a></li>
          <li><a href='d'>kids</a></li>
          <li><a href='d'>contacts</a></li>
        </ul>
        <ul className='inc'>
          <li><FaShoppingCart color='#000' size={30} /></li>
          <li><FiSearch color='#000' size={30} /></li>
          <li className='active'><BsGrid3X3Gap color='#fff' size={30}/></li>
        </ul>
        </div>
        <section className='body'>
          <div className="container-ls">
          <div className='ls'></div>
          <div className='ls'></div>
          <div className='ls'></div>
          
          </div>
          <div className='textos'>
            {/* <h4>Lazer show</h4> */}
            <div><h3>AIR</h3>  <h1>JordaN</h1></div>
            <p>... Learn W3.CSS Learn Colors Learn Icons Learn Graphics Learn SVG Learn Canvas Learn How To Learn Sass ... Icons Tutorial ... Icons BS Glyphicons ...
‎Google Icons Intro · ‎Trash Glyph · ‎Pencil Glyph · ‎Home Glyph

Icons · Bootstrapgetbootstrap.com › docs › extend
Traduzir esta página
Icons. Guidance and suggestions for using external icon libraries with Bootstrap. Bootstrap doesn't include an icon library by default, but we have a handful of ...</p>

          <a href='3'>Shop Now</a>
          </div>
          <footer>
            <img src={first} alt=''/>
            <img src={two} alt=''/>
            <img src={three} alt=''/>
            <div className='icones'>
            <BsArrowLeft size={40} color='#000'/>
            <BsArrowRight size={40} color='#000'/>
            </div>
          </footer>
        </section>
      </aside>
      <div className="img-ls">
        <img src={first} alt='' />
      </div>
    </div>
  );
}

export default App;
