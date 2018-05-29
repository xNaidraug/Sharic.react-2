import React,{Component } from 'react';


class Navegación extends Component{
    render(){
        return(
            /*De esta forma es dinámico ya que la propiedad titulo puede cambiar al incluir diferentes nav en este caso*/
            /*{ this.props.titulo}*/
            <nav className="navbar navar-dark bg-dark">

                <a href="" className="text-white">

                   Tareas
                </a>
            </nav>



        );



    }

}

export default Navegación;