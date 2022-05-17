import React from "react";
import { useAppContext } from "../context/AppProvider";
import '../styles/ListaDeTareas.css'
import Tarea from "./Tarea";


const ListaDeTareas = () => {
  const { tareas, dispatch } = useAppContext();


  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    dispatch({
      type: 'DELL_TAREA',
      value: tareasActualizadas
    })
  }


  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    dispatch({
      type: 'FINISH_TAREA',
      value: tareasActualizadas
    })
  }


  return(
      <>
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea) =>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada ={tarea.completada}
                eliminarTarea = {eliminarTarea}
                completarTarea = {completarTarea}
              /> 

            )
          }

        </div>
      </>  
  )
}

export default ListaDeTareas;
