import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
     <div className='layout'>
        <header className='header'>
          <div className='logo'>
              <div className='play'></div>
          </div>
          <h1>Mis pelis by @Christian Beltran</h1>
        </header>
          <nav className='nav'>
              <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Peliculas</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contacto</a></li>
              </ul>
          </nav>

      <section className='content'>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>
            </article>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>
            </article>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>
              
            </article>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>
              
            </article>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>          
            </article>
            <article className='peli-item'>
              <h3 className='title'>Red social</h3>
              <p className='description'>christian beltran vs mark zuckerberg</p>
              <button className='edit'>Edit</button>
              <br></br>
              <button className='delete'>Delete</button>          
            </article>
      </section>

      <aside className='lateral'>
          <div className='search'>
                <h3 className='title'>Buscador</h3>
                <form>
                  <input type="text"/>
                  <button>Buscar</button>
                </form>
          </div>
          <div className='add'>
              <h3 className='title'>add Movie</h3>
            <form>
                <input type="text" placeholder='title'></input>
                <textarea placeholder='Descripction'></textarea>
                <input type="submit" value="save"/>
            </form>
          </div>
      </aside>
        <footer className='footer'>
          &copy; kodemia G 25js autor: @Christian Beltran Bedolla
        </footer>
     </div>
    </>
  )
}

export default App
