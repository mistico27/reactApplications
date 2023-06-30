import { Container } from 'postcss';
import { useState } from 'react'

export default function Button() {
    const [number, setNumber] = useState(0);
   
    function EsteEsMiEventoClick(){
      setNumber(number+1);
    }
  
    function EsteEsMiEventoClickII(){
        setNumber(number-1);
      }

    return (
        <>
     <button onClick={EsteEsMiEventoClick}>
          suma   
     </button>
       <p>{number}</p>

       <br/>
       <button onClick={EsteEsMiEventoClickII}>
          resta   
     </button>
     <p>{number}</p>
       </>
    )
  }