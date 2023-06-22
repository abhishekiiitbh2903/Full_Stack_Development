// Use State hook is used to rerender the function inorder to bring a change in user interface 

import { useState } from "react";

function Counter(){
    console.log('render Counter')
    const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        setNumber(number=>number+1); // if button will be clicked n times the value will get incremented by n times
        // setNumber(number+1);  // if button will be clicked n times the value will get incremented by 1 times
    }

    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;