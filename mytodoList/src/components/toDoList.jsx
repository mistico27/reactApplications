import React from 'react';
import './toDoList.css'
const items = [
    {
      id: 1,
      content: "Test Content",
      complete: false
    },
    {
      id: 2,
      content: "Test Content 2",
      complete: false
    }
  ]  
  export default function ToDoList() {
    return (
        <>
        <ul className='fronFrame'>
        <p>Lista de actividades</p>    
        <button className='submitbutton' type="submit">Add</button>
            
                <br/>
                </ul>        
   
    <ul className='newButtion'>
    Actividad:
    <input type="text" name="name" />
    <button className='redButton'>X</button>            
        </ul>
        <button className='BorrarTodo'>BorrarTodo</button>      

        </>   
    );
}


