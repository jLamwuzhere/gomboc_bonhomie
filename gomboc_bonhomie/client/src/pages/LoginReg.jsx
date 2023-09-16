import React from 'react'
// import React, { useState }from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const Dashboard = () => {

    // const [flip, setFlip] = useState(false)

    // const changeFlip = () => setFlip(!flip)

    return(
        <fieldset>
            <legend>LoginReg.jsx</legend>
            <Register />
            <Login />
            {/* <Register flip={flip}/>
            <Login changeFlip={changeFlip}/> */}
        </fieldset>
    )
}

export default Dashboard