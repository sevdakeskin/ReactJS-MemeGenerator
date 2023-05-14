import React from "react";
import  "../styles/Counter.css"

function Counter(){
     const[count,setCount] =React.useState(0);
    /////////////////
     function add(){
        setCount(count + 1)
     }
     function subtract(){
        setCount(count -1)
     }

     function reset(){
        setCount(0)
     }

     //////////////////
    return(
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
            <button onClick={reset}>Reset</button>

            {/**reset butonu,fonksiyona bağla ve resetle */}
        </div>

    )

}
export default Counter;