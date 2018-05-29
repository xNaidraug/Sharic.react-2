import React ,{Component} from 'react';
import Navegación from "./Navegación";

class FormularioTareas extends Component{
constructor(){
    super();
    this.state = {
        titulo: '',
        responsabilidad: '',
        descripcion:'',
        prioridad: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.envio = this.envio.bind(this);


}
    handleInput(e){

        const {value, name} = e.target;
        this.setState({
        [name]: value
        });
        console.log(this.state)
    }



    envio(resultado){

        resultado.preventDefault();
        this.props.onAddTarea(this.state)


            }



    handleInputChange(e){
        console.log('La prioridad es: '+e.target.value)
    }
    render (){
        return(

            <div className='container'>
                <div className='card'>


                <form className='card-body' onSubmit={this.envio}>
                    <div className='form-group'>
                        <input
                            type="text"
                            name='tittle'
                            onChange={this.handleInput}
                            className='form-control'
                            placeholder='Titulo'
                                >

                        </input>
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            name='responsable'
                            className='form-control'
                            placeholder='Responsable'
                            onChange={this.handleInput}

                        >

                        </input>
                    </div>
                    <div className='form-group'>
                        <input
                            type="text"
                            name='descripcion'
                            className='form-control'
                            placeholder='Descripcion'
                            onChange={this.handleInput}

                        >

                        </input>
                    </div>
                    <div className='form-group'>
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

export default FormularioTareas;