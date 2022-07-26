import React from "react"

class ClassState extends React.Component {
    
    render(){
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor, escribe el código de seguridad</p>
                <input  type='text' placeholder="Codigo"/>
                <button>Comprobar</button>
            </div>
        );

    };
}

export {ClassState};