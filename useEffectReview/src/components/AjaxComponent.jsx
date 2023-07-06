import React,{useEffect} from "react";
import { useState } from "react";



export const AjaxComponent =()=>{

    const[usuarios,setUsuarios]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState("");

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
    

    const hetUsusariosAjaxProm =()=>{
        fetch("https://reqres.in/api/users?page=1")
             .then(respuesta=>respuesta.json())
             .then(resultado_final=>{
                setUsuarios(resultado_final.data);
             },
                error=>{
                    console.log(error);
                }    
             );
    }
    
    const getUsuariosAsyncAwait=async()=>{
        try{
        setTimeout(async()=>{
            const peticion= await fetch("https://reqres.in/api/users?page=1");
            const {data} =await peticion.json();
            setUsuarios(data);
            setLoading(false);
        },2000)
    }catch(e){
        setError(e.message);
    }
    }


    useEffect(()=>{
        ///getUsuarios();
        ///hetUsusariosAjaxProm();
        getUsuariosAsyncAwait();
    },[]);

if(error!==""){
    return(
        <div className="errores">
            {error}
        </div>
    );

}else if(loading==true){
///cuando se esta cargando
return(
    <div className="cargando">
        cargando Datos...
    </div>
);
    }else if(loading==false && error===""){
///cuando todo ha ido bien
return(
    <div>
        <h2>Listado de usuarios</h2>
        <ol className="users">
         {
        usuarios.map(usuario=>{
            return <li key={usuario.id}>
                <img src={usuario.avatar} width="80"/>
                &nbsp;
                {usuario.first_name} {usuario.last_name}
                </li>
        })
        }
        </ol>
    </div>
)
    }   
}