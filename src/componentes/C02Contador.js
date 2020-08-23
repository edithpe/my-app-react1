import React,{Fragment,useState} from 'react';
 const Contador=()=>{
     const[valor,setValor]=useState(0);
     const[numero, setNumero]=useState(0);
     const IncrementoDos=()=> {
         setNumero(numero + 1);
         console.log("mensaje de contador");

     }
     return(
        <Fragment>
            <button onClick={()=> setValor (valor+ 1)}>Contador1</button>
            <span >Incremento de contador1 :{valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>Contador2</button>
            <span>Incremento de contador2:{numero}</span>
            </Fragment>
     );
 }
 export default Contador;