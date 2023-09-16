import React from 'react';
import { useParams } from 'react-router-dom';

// import React, {useContext} from 'react';
// import { LoginContext } from '../../App';

const WelcomeUser = () => {
    
    const {user_id} = useParams();
    // IF WE NEEDED THE USER_ID AS A NUMBER, WE FIRST HAVE TO PARSE TO AN INT
    console.log(parseInt(user_id))

    return (
        <fieldset>
            {/* <legend>WelcomeUser.jsx</legend> */}
            <h3>Welcome!</h3>
            {/* <h3>Welcome, {user_id}!</h3> */}
        </fieldset>
    )
}

export default WelcomeUser