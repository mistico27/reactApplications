import React,{useEffect,useState} from "react";
import { AvisoComponent } from "./AvisoComponent";
export const PruebasComponent =()=>{
    const[usuario, setUsuario]=useState("Christian");
    const[contador, setContador]=useState(0);

    const modUsusario =(e)=>{
        setUsuario(e.target.value);
        console.log("ha sido modificado el usuario");
    }
    ///solo se ejecuta una vez
    useEffect(()=>{
        console.log("El componente se cargo");
    },[]);
    ///se ejecuta si se modifica el nombre
    useEffect(()=>{
        setContador(contador+1);
        console.log("El componente se cargo de usuario: " , contador);

    },[usuario]);

    return(
        <div>
            <h1>useEffect exercise</h1>
            <strong className={contador>=10?'label label-green':'label'}>{usuario}</strong>
            <form>
            <input type="text" onChange={modUsusario} 
            placeholder="cambiar el nombre"/>
            </form>

            {usuario=="Lorena" && <AvisoComponent />}

        </div>
    )
}