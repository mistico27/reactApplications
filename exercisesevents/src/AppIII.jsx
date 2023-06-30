import { useState } from 'react'


export default function AppIII() {
  const [isName, setName] = useState('');
 
  function handleClick(){
    setName(prompt('Cúal es tu nombre??'));
  }

  return (
   <button onClick={handleClick}>
        Saludos  {isName}
   </button>
     
  )
}