// import React, { useEffect, useState, useContext } from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
// import { LoginContext } from '../App'



const EditBroadcast = () => {

    // const [setLoggedIn] = useContext(LoginContext);

    // GET PATH VARIABLE
    const { broadcast_id } = useParams()

    const navigate = useNavigate()

    // STATE
    const [broadcastMessage, setBroadcastMessage] = useState("")
    // const [date, setDate] = useState("")
    // const [under30Mins, setUnder30Mins] = useState(false)

    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/broadcasts/${broadcast_id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setBroadcastMessage(res.data.broadcastMessage)
                // setDate(new Date(res.data.dateMade).toLocaleDateString('en-CA'))
                // setUnder30Mins(res.data.under30Minutes)
            })
            .catch(errors => {
                console.log(errors)
                if(errors.response.status === 401){
                    console.log("UNAUTHORIZED")
                    // setLoggedIn(false)
                    navigate("/")
                }
            })
    }, [broadcast_id, navigate])

    const updateBroadcast = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let updatedBody = {
            "broadcastMessage": broadcastMessage,
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.put(`http://localhost:8000/api/broadcasts/${broadcast_id}`, updatedBody, { withCredentials: true })
            .then(res => {
                navigate(`/broadcasts`) //REDIRECT TO DASH
                // navigate(`/broadcasts/${broadcast_id}`) // REDIRECT TO DETAILS
            })
            .catch(err=>{
                if (err.response && err.response.data && err.response.data.errors) {
                const editErrorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(editErrorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(editErrorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }})
    }

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <form onSubmit={updateBroadcast}>
                <p>
                    Name:
                    <input type="text" value={broadcastMessage} onChange={(e) => setBroadcastMessage(e.target.value)} />
                </p>
                {/* <p>
                    Date Made:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </p>
                <p>
                    Under 30 mins?
                    <input type="checkbox" checked={under30Mins} onChange={(e) => setUnder30Mins(e.target.checked)} />
                </p> */}
                <button>Submit</button>
            </form>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default EditBroadcast