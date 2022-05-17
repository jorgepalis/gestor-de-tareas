import React, { useState } from 'react';
import '../styles/Formulario.css'
import { v4 as uuidv4 } from 'uuid'
import { useAppContext } from "../context/AppProvider";


function TareaFormulario(){

  const [input, setInput] = useState("");
  const { tareas, dispatch } = useAppContext();

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();
    if(input===""){
      alert("No puede ingresar una tarea vacia");
    }
    else{
      const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completada: false
      }
      const nuevasTareas = [...tareas, tareaNueva]
      dispatch({
        type: 'ADD_TAREA',
        value: nuevasTareas
      })
      const def = "";
      setInput(def)
    }
         
  }


  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type='text'
        placeholder='escribe una tarea'
        name='texto'
        onChange={manejarCambio}
        value = {input}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  
  )
}

export default TareaFormulario;