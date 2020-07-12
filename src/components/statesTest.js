import React, {useState} from 'react'

function Example(){
    const [value, setValue] = useState(0);

    const incremantMyValue = () =>{
        setValue(value +1);
    }

    return(
        <div>
            <button onClick={incremantMyValue}>Click me </button>
            <p>{value}</p>
        </div>
    )
}

export default Example;
