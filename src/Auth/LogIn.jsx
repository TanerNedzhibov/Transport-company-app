import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DangerousIcon from '@mui/icons-material/Dangerous';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const LogIn = () => {

    const [inputs, setInputs] = useState({
        field1: "",
        field2: ""
    });
    const [error, setError] = useState("");
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    function approved() {
        
        Navigate("/Trucks")
        window.location.reload();

    }
    console.log(inputs)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.field1 === "admin" && inputs.field2 === "testadmin"){
            localStorage.setItem("Auth", true)
            setError("LogedIn");
            setTimeout(approved, 500)
        }else{
            setError("Failed");
        }
    }
  return (
    <div className='loginPage'>
        <form className='loginForm' onSubmit={handleSubmit}>
            <LocalShippingIcon fontSize='large' sx={{marginTop: "-60px"}} />
            <input className='formInput' placeholder='Потребителско име' autoFocus name='field1' type="text" onChange={handleChange}/>
            <input className='formInput' placeholder='Парола' name='field2' type="password" onChange={handleChange} />
            <input id='submitButton' name='submitButton' type="submit" value="Влез"/>
            <span className='alerBar' style={{opacity: error === "Failed" ? "1" : "0"}}><DangerousIcon />Грешно потребителско име или парола!</span>
            {error === "LogedIn" ? <span className='alerBar2'><DoneOutlineIcon />Добре дошъл</span> : null}
        </form>
        
    </div>
  )
}

export default LogIn
