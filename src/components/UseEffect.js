import React from "react";

export default function UseEffect(){
    const [count,setCount] = React.useEffect(0);
    

 
console.log("component rendered");
React.useEffect(function(){
    console.log ("use effect executed");
    // api request
    //fetch ->get user
    //fetch ("https://swapi.dev/api/people /1")
    //      .then(res => res.json())
    //       .than(data =>consolr.log(data))

},[count])


/*React.useEffect(() =>{

}
)*/

return(
    <>
      <div>
        <h2>The count is{count}</h2>
        <button onClick={() => setCount(prevCount => prevCount +1)}>Add</button>
      </div>
    
    
    
    </>
)
}