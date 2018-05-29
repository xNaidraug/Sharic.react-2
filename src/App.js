import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegación';
import Forumalrio from './componentes/FormularioTareas'
import  { tareas } from './tarea';








class App extends Component {
   // se ejecuta según se crea el componente antes de devolver la interfaz
    constructor(){
        super();
        this.state = {
           tareas
        };
        this.AgregarTarea = this.AgregarTarea.bind(this);

    };


    AgregarTarea(tarea){
        this.setState({
            tareas: [this.state.tareas, tarea]
        })
    }

  render() {

      const tarea =  this.state.tareas.map((tarea, i)=>{
            return(
               <div className="col-md-4">
                   <div className="card">
                       <div className="card-header">
                           <h3>{tarea.tittle}</h3>
                           <span className="badge badge-pill badge-danger">
                               {tarea.prioridad}
                           </span>
                       </div>
                       <div className="card-body">
                           <p> {tarea.descripcion}</p>
                           <p>{tarea.responsable}</p>
                       </div>

                   </div>
               </div>
            )
      });

    return (
      <div className="App">

          <Navegacion>
              Tareas
              <span className="badge badge-pill badge-light ml-2">
                  {this.state.length}
              </span>
          </Navegacion>

         <div className="container">
             <div className="row mt-4">
                 {tarea}
             </div>

         </div>
          <img src={logo} className="App-logo" alt="logo" />




          <Forumalrio onAddTarea={this.AgregarTarea}/>



      </div>
    );
  }
}

export default App;
