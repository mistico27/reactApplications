import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EjercicioComponent } from './components/ejercicioComponents'

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();


  return (
    <>
      <EjercicioComponent year={yearActual}/>
    </>
  )
}

export default App
