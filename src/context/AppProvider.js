import { createContext, useReducer, useContext } from 'react'
// crear contexto
const AppContext = createContext(); 

// hook personalizado
const useAppContext = () => {
    return useContext(AppContext); 
}

//estado inicial
const stateInitial = { 
    tareas: []
}


// crear reduce con acciones
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TAREA':
            return {
                tareas: action.value
            }
        
        case 'DELL_TAREA':
            return {
                tareas: action.value
            }
        
        case 'FINISH_TAREA':
            return {
                tareas: action.value
            }

        default:
            return state;
    }
}



// crear provider
const AppProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(reducer, stateInitial)

    return(
    <AppContext.Provider value={{ tareas: state.tareas, dispatch }}>
        {children}
    </AppContext.Provider>
    )
}

// exportar
export {AppProvider, useAppContext}