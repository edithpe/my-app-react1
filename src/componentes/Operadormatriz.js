import React,{useState,Fragment} from 'react';

const Operadormatriz= () => {
    const [lista,setLista]=useState([2,4,6,8,10]);
    const [orden,setOrden]=useState(["1X0 ","1x2 ","Dos ","Tres ","Cuatro "]);
    const uniendoArray=[...lista, ...orden];

    const [numero,setNumero]=useState(4);
    const agregarNumero=()=>{
        //console.log(uniendoArray);
        
        setNumero(numero+1);
        setLista([...lista, numero]);
    }
    const[texto,setTexto]=useState(["Cinco ","Seis ","Siete "]);
    const agregarTexto=()=>{
        //setTexto(texto);
        setOrden([...orden, ...texto]);
    }
    return ( 
        <Fragment>
            
            <h1>Los Números son</h1>
            <button onClick={agregarNumero,agregarTexto}>Agregar Número y Texto</button>
            {
                orden.map((item,index)=>
                    <p key={index}>{item}={index}</p>
                )
            }
        </Fragment>
     );
}
export default Operadormatriz;