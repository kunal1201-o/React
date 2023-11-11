import { useState } from "react";

function App() {
   let [counter,setCounter]=useState(0);

  const increment =()=>{
    console.log("Clicked",Math.random());
  
    if(counter<20)
    counter=counter+1;
    setCounter(counter)}
 
  const decrement=()=>{
    if(counter>0)
    counter=counter-1;

    setCounter(counter)}
  


return (
  <>
   <h1>Counter: {counter}</h1>
   <button onClick={increment}>increase {counter}</button><br />
   <button onClick={decrement}>decrease {counter}</button>
   </>
  )
}

export default App
