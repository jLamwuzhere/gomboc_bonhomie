import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

const Register = (flip) => {
    
    const navigate = useNavigate()

    const [registerState, setRegisterState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errorState, setErrorState] = useState({})

    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        // MAKE THE AXIOS POST REQUEST TO EXPRESS
        // TECHNICALLY WE DON'T NEED CREDENTIALS HERE BECAUSE THERE IS NO COOKIE BEING ASSIGNED
        axios.post("http://localhost:8000/api/users/register", registerState, { withCredentials: true })
            .then(res => {
                console.log(res)
                // toast.success("Register success!")
                // flip()
                navigate("/users/login")
            })
            .catch(err => {
                console.log(err);
                const { errors } = err.response.data;
                const errObj = {}
                for (const [key, value] of Object.entries(errors)) {
                    console.log(errors[key])
                    errObj[key] = value;
                }
                if(err.response.data)
                setErrorState(errObj)
                // toast.error('Register failed. Please correct any errors.');
            })
    }

    return (
        <fieldset>
            <legend>Register.jsx</legend>
            <h1>Register</h1>
            <form onSubmit={registerSubmit}>
                <p>
                    <strong>First Name:</strong>
                    <input name="firstName" type="text" className="inputBox"  placeholder="Ryan" onChange={registerChangeHandler} />
                </p>
                <p>
                    {(errorState.firstName) ? <small className="warning">ERROR: </small> : null}
                    {errorState.firstName && (<small className="warning">{errorState.firstName.message}</small>)}
                </p>
                <p>
                    <strong>Last Name:</strong>
                    <input name="lastName" type="text" className="inputBox"  placeholder="Reynolds" onChange={registerChangeHandler} />
                </p>
                <p>
                    {(errorState.lastName) ? <small className="warning">ERROR: </small> : null}
                    {errorState.lastName && (<small className="warning">{errorState.lastName.message}</small>)}
                </p>
                <p>
                    <strong>Email:</strong>
                    <input name="email" type="text" className="inputBox"  placeholder="supercool@hotmail.com" onChange={registerChangeHandler} />
                </p>
                <p>
                    {(errorState.email) ? <small className="warning">ERROR: </small> : null}
                    {errorState.email && (<small className="warning">{errorState.email.message}</small>)}
                    {(errorState.duplicate) ? <small className="warning">ERROR: </small> : null}
                    {errorState.duplicate && (<small className="warning">EMAIL EXISTS</small>)}
                    {(errorState.validate) ? <small className="warning">ERROR: </small> : null}
                    {errorState.validate && (<small className="warning">EMAIL EXISTS</small>)}
                </p>
                <p>
                    <strong>Password:</strong>
                    <input name="password" type="text" className="inputBox"  placeholder="$uper $ecR3T" onChange={registerChangeHandler} />
                </p>
                <p>
                    {(errorState.password) ? <small className="warning">ERROR: </small> : null}
                    {errorState.password && (<small className="warning">{errorState.password.message}</small>)}
                </p>
                <p>
                    <strong>Confirm Password:</strong>
                    <input name="confirmPassword" type="text" className="inputBox"  placeholder="must match" onChange={registerChangeHandler} />
                </p>
                <p>
                    {(errorState.confirmPassword) ? <small className="warning">ERROR: </small> : null}
                    {errorState.confirmPassword && (<small className="warning">{errorState.confirmPassword.message}</small>)}
                </p>
                <button type="submit">Submit</button>
            </form>
        </fieldset>
    )

}

export default Register