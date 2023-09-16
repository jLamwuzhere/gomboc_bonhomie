// import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserBase = () => {

    const navigate = useNavigate()
    
    const getAllUsers = () => {
        axios.get("http://localhost:8000/api/users", { withCredentials: true })
            .then(res => {
                console.log(res)
            })
                
            .catch(err => {
                console.log(err)
                if(err.response.status === 401) {
                    console.log("UNAUTHORIZED")
                    navigate("/")
                }
                else if (err.response.status === 400) {
                    console.log("BAD REQUEST")
                }
            })
    }

    <button onClick={getAllUsers}>GET ALL USERS</button>

}

export default UserBase