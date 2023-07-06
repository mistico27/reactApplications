import React,{useEffect} from "react";
import { useState } from "react";



export const AjaxComponent =()=>{

    const[usuarios,setUsuarios]=useState([]);
    ///basico
    const getUsuarios = ()=>{
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
              },
              {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
              },
              {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
              },
        ]);
    }
    
    
    useEffect(()=>{
        getUsuarios();
        
    },[]);
    
    

    return(
        <div>
            <h2>Listado de usuarios</h2>
            <ol className="users">
             {
            usuarios.map(usuario=>{
                return <li key={usuario.id} name={usuario.first_name}>{usuario.first_name}</li>
            })
            }
            </ol>
        </div>
    )
}