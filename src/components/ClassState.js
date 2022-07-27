import React from "react"

class ClassState extends React.Component {
    
    constructor (props){

        super(props)

        this.state = {
            error : false,
            loading: false
        }
    }

    componentDidUpdate(){
        console.log("Inicio componentDidUpdate");
        if(!!this.state.loading){
            setTimeout(() => {
            
                console.log("Validando");
                this.setState({loading: false});
                console.log("Fin validacion");
                
            }, 3000);
        }
        console.log("Fin componentDidUpdate");
    }

    render(){
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {this.state.error && <p>Error: Codigo incorrecto</p>}
                {!!this.state.loading && <p>Loading ...</p>}
                <input  type='text' placeholder="Codigo"/>
                <button onClick={() => {this.setState( {loading : true})}} disabled={this.state.loading}>Comprobar</button>
            </div>
        );

    };
}

export {ClassState};