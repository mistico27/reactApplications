import { useState } from 'react'


export default function AppII() {
  const [isSent, setIsSent] = useState('');
  const [message, setMessage] = useState('');
  if(isSent){
    return <h1>thanks!!!</h1>
  } 

  return (
   <form onSubmit={e=>{e.preventDefault();
        alert(`sending: ${message}`);
        setIsSent(true);
   }}>
      <textarea
        placeholder='Message'
        value={message}
        onChange={e=>setMessage(e.target.value)}
      />
      <br/>
      <button type="submit">Enviar</button>
   </form>
     
  )
}