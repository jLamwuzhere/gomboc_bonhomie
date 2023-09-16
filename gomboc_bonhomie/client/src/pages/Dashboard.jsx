import React, { useState }from 'react'
import Broadcasts from '../components/AllBroadcasts'
import CreateBroadcast from '../components/CreateBroadcast'

const Dashboard = () => {

    const [flip, setFlip] = useState(false)

    const changeFlip = () => setFlip(!flip)

    return(
        <fieldset>
            <legend>Dashboard.jsx</legend>
            {/* WE PASS DOWN OUR changeFlip FUNCTION TO CHANGE THE RESOURCE VARIABLE */}
            <CreateBroadcast changeFlip ={changeFlip} />
            {/* THEN WE PASS flip DOWN AS A PROMPT TO THE DASHBOARD*/}
            <Broadcasts flip={flip} />
        </fieldset>
    )
}

export default Dashboard