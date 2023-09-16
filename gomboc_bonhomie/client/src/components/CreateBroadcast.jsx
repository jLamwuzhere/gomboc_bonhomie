import { useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// WE DESTRUCTURE BY ADDING changeFlip IN BRACKETS HERE
const CreateBroadcast = ({changeFlip}) => {

    // const navigate = useNavigate()

    // STATE
    const [broadcastMessage, setBroadcastMessage] = useState("")

    const [errors, setErrors] = useState([]); 

    const createNewBroadcast = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let body = {
            "broadcastMessage" : broadcastMessage,
            // "date" : date,
            // "under30Minutes" : under30Mins
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/broadcasts", body, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setBroadcastMessage("")
                // setDate("")
                // setUnder30Mins(false)
                setErrors([])
                // HERE SINCE WE KNOW THE USER IS SUCCESSFULLY CREATED, WE'LL CALL changeFlip TO REFRESH
                changeFlip();
                // navigate("/broadcasts")
            })
            .catch(err=>{
                if (err.response && err.response.data && err.response.data.errors) {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }})
        // console.log("ASYNC")
        //     .catch(errors => console.log(errors.response.data.errors))
    }

    return (
        <fieldset>
            <legend>CreateBroadcast.jsx</legend>
            <div className='form'>
                <form onSubmit={createNewBroadcast}>
                    <p>
                        Status:
                        <input className="inputBox"  type="text" value={broadcastMessage}  placeholder='Hello World!'  onChange={(e) => setBroadcastMessage(e.target.value)} />
                    </p>
                    <button>Confirm</button>
                </form>
            </div>
            {
                errors.map((error) => <p>{error}</p>)
            }
        </fieldset>
    )
}

export default CreateBroadcast