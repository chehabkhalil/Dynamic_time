import React from 'react'; 
import './App.css';
import './App'

function StaticTimer(props) {
    let st=parseInt(props.start)
    let h= Math.floor(st/3600).toString();
    let m= Math.floor((st%3600)/60).toString();
    let s= Math.floor(st%60).toString();


    return (
        
        <div className="Time">
            <div>{(h.length>2 ?h:"0"+h)}</div>:<div>{(m.length>2 ?m:"0"+m)}</div>:<div>{(s.length>2 ?s:"0"+s)}</div>
        </div>
    );
}

export default StaticTimer;