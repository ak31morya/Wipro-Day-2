import { useState } from "react";

const First = () => {
    const [name,setName] = useState('')

    const aashish = () => {
        setName("Hi I am Aashish...")
    }

    const ajay = () => {
        setName("Hi I am Ajay...")
    }

    const sravani = () => {
        setName("Hi I am Sravani...")
    }

    return(
        <div>
            <p>Student Name is : {name}</p> 
            <br/>
            <input type="button" value="Aashish" onClick={aashish} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Ajay" onClick={ajay} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Sravani" onClick={sravani} />
        </div>
    )
}

export default First;