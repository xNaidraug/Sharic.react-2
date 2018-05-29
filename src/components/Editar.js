import React, { Component } from 'react';

class Editar extends Component{






    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-warning">Advertencia</button>

            </div>
        )
    };




}
export default Editar;