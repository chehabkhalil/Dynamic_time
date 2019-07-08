import React from 'react';
import './App.css';

function Indication(props) {
    if (props.name==="Start")
    return (
        <button className="Btn_start" >{props.name}</button>
        
    )
    return ( <button className="Btn_reset" >{props.name}</button>)
    ;
}

export default Indication;