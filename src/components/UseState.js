import React from "react";

function UseState ({name}) {

    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    React.useEffect(() => {
        console.log("Inicia el Effect");
        if(!!loading){
            setTimeout(() => {
            
                console.log("Validando");
                setLoading(false);
                console.log("Fin validacion");
                
            }, 3000);
        }
        console.log("Termina el Effect");
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {!!loading && <p>Loading ...</p>}
            {error && <p>Error: Codigo incorrecto</p>}
            <input  type='text' placeholder="Codigo"/>
            <button onClick={() => {setLoading(prevLoading => !prevLoading)}}>Comprobar</button>
        </div>
    );
}

export {UseState};