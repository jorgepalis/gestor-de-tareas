import React from "react";
import '../styles/tarea.css'
import { AiFillDelete } from "react-icons/ai";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
          <div 
            onClick={() => completarTarea(id)}
            className="texto-contenedor">
            {texto}
          </div>
          <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
            <AiFillDelete 
            className="tarea-icono" />
          </div>
        </div>
    )
}

export default Tarea;