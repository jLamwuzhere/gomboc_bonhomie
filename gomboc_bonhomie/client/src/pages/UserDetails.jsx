// import React, {useEffect, useContext} from "react";
import { useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { LoginContext } from "../App";

const UserDetails = () => {

    // const [setLoggedIn] = useContext(LoginContext);

    const navigate = useNavigate()
    const {user_id} = useParams

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${user_id}`, { withCredentials: true })
        .then(res => {
            console.log(res.data)
            // const {}
        })
        .catch(errors => {
            console.log(errors)
            if(errors.response.status === 401){
                console.log("UNAUTHORIZED")
                // setLoggedIn(false)
                navigate("/")
            }
        })
    }, [user_id, navigate])

    return (
        <fieldset>
            <legend>UserDetails.jsx</legend>
            <h1>This is your User Details</h1>
        </fieldset>
    )
}

export default UserDetails