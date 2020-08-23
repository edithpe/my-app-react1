import React, {useState,Fragment} from 'react';

const Matriz = () => {
    const[lista, setLista]=useState([1,2,3,4,5])
    return (
        <Fragment>
            <h2>Matriz</h2>
            <h1>Lectura sin index y sin html</h1>
            { lista.map((item)=> item) }
            <hr/>
            <h1>Lectura sin index y con html</h1>
            { lista.map((item)=> <spam>{item} </spam>)}
            <hr/>
            <h1>Listas con index y sin key</h1>
            {
                lista.map((item,index)=>
                <p>{item} - {index}</p>
                )
            }
            <hr/>
            <h1>Listas con index y con key </h1>
            {
                lista.map((item,index)=>
                <p key={index}> {item}-{index}</p>
                )
            }
        </Fragment>
    );
}
export default Matriz;