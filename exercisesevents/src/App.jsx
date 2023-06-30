import { useState } from 'react'


export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirsNamechange(e){
    setFirstName(e.target.value);
  }
  function handleLastNamechange(e){
    setLastName(e.target.value);
  }

  function handleReset(){
    setFirstName('');
    setLastName('');
  }

  return (
   <form onSubmit={e=>e.preventDefault()}>
      <input placeholder='Nombre' value={firstName} onChange={handleFirsNamechange}>
      </input>
      <input placeholder='apellido' value={lastName} onChange={handleLastNamechange}>
      </input>
      <h1>Hello {firstName} {lastName}</h1>
      <button onClick={handleReset}>reiniciar</button>
   </form>
     
  )
}


