// import {useState, useEffect, useContext} from 'react'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
// import { LoginContext } from '../App'

const Broadcasts = ({flip}) => {

    // const [setLoggedIn] = useContext(LoginContext);

    const navigate = useNavigate()
    // STATE
    const [allBroadcasts, setAllBroadcasts] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/broadcasts", { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setAllBroadcasts(res.data)
            })
            .catch(errors => {
                console.log(errors)
                if(errors.response.status === 401){
                    console.log("UNAUTHORIZED")
                    // setLoggedIn(false)
                    navigate("/")
                }
            })
    }, [flip, refresh, navigate])

    // const dateFormat = dateString =>{
    //     let dateObj = new Date(dateString)
    // }

    const deleteBroadcast = (broadcast_id) => {
        axios.delete(`http://localhost:8000/api/broadcasts/${broadcast_id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setRefresh(!refresh)
            })
            .catch(errors => console.log(errors))
    }

    // HANDLER
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Broadcast</th>
                        {/* <th>Date Made</th>
                        <th>Under 30 minutes</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBroadcasts.map((broadcast) => {
                            // const {_id, name, field3, field4, createdAt} = broadcast
                            // We are destructuring here so we don't repeat broadcast.whatever everytime.
                            const {_id, broadcastMessage} = broadcast
                            return(
                                <tr key={_id}>
                                    {/* <td>{_id}</td> */}
                                    <td>{broadcastMessage}</td>
                                    <td>
                                        <button><Link className="noDecorating" to={`/broadcasts/${_id}`}>View</Link></button>
                                        <button><Link className="noDecorating" to={`/broadcasts/edit/${_id}`}>Edit</Link></button>
                                        <button className="deleteButton" onClick={() => deleteBroadcast(_id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Broadcasts