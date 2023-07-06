import React,{useEffect} from "react";

export const AvisoComponent =()=>{

    useEffect(()=>{
        alert('el compoinente avisoComponent esta montado')
        return ()=>{
            alert("Componente desmontado")
        };
    },[]);


    return(
        <div>
            <h1>Has puesto a Lorena, Saludos...</h1>
            <button onClick={e =>{
                alert("Bienvenido")
            }}>MostrarAlerta</button>
        </div>
    )
}