import './App.css';
import Formulario from './components/Formulario';
import ListaDeTareas from './components/ListaDeTareas';
import { AppProvider } from './context/AppProvider';
import imgMain from './img/main.png'
function App() {

   /* enlazar provider */
  return (
    <AppProvider>
      <div className="App">
        <div className='container-creador'>
          <h1>Gestor de Tareas</h1>
          
          <h2>Ingresa tu Tarea</h2>
          <Formulario/>
          
          <div className='container-main'>
            <img className='img-main' src={imgMain} alt='imagen Main'></img>
          </div>

        </div>
        <div className='container-lista'>
          <h1 className='h2Tarea'>Tus Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
