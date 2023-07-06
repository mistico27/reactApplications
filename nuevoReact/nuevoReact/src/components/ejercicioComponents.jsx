import React,{useState} from 'react';
import PropTypes from 'prop-types';


export const EjercicioComponent = ({year})=>{
    const [changeYear,setChangeYear]=useState(year);

    const siguiente =(e)=>{
        setChangeYear(changeYear +1);
    }

    const anterior =(e)=>{
        setChangeYear(changeYear -1);
    }

    const ChangeMyYear=(e)=>{
        let dato=parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setChangeYear(dato);
        }else{
            setChangeYear(year);
        }
        
    }

    return(
        <div>
            <h2>ejercicio con eventos y use State</h2>
            <strong className='label label-green'>
                {changeYear}
            </strong>
            <p>
                <button onClick={siguiente}>Siguiente</button>
                &nbsp;
                <button onClick={anterior}>Anterior</button>
            </p>

            <p>Cambiar Año</p>
            <input onChange={ChangeMyYear} type="text"
            placeholder='ingresa el año'
            ></input>
        </div>
    )
}
///elemento requerido
EjercicioComponent.PropTypes={
    year:PropTypes.number.isRequired
}