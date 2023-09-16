// import { useEffect, useState, useContext } from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
// import { LoginContext } from '../App';

const BroadcastDetails = () => {

    // const [setLoggedIn] = useContext(LoginContext);

    const navigate = useNavigate()
    const {broadcast_id} = useParams()

    // STATE
    const [oneBroadcast, setOneBroadcast] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/broadcasts/${broadcast_id}`, {withCredentials: true})
            .then(res => setOneBroadcast(res.data))
            .catch(errors => {
                console.log(errors)
                if(errors.response.status === 401){
                    console.log("UNAUTHORIZED")
                    // setLoggedIn(false);
                    navigate("/")
                }
            })
    }, [broadcast_id, navigate])

    return (
        <fieldset>
            <legend>BroadcastDetails.jsx</legend>
            {/* TERNARY OPERATOR */}
            {
                (oneBroadcast) ? 
                <>
                    <h5>User's Broadcast: </h5>
                    <h1>{oneBroadcast.broadcastMessage}</h1>
                    {/* <h1>{oneBroadcast.comments}</h1> */}
                    {/* <h1>DateMade: {oneBroadcast.dateMade}</h1>
                    // BOOLEAN EXAMPLE
                    <h1>Under 30 mins?: {(oneBroadcast.under30Minutes) ? "Yes" : "No"}</h1> */}
                </> : <h1>Loading....</h1>
            }

        </fieldset>
    )
}

export default BroadcastDetails