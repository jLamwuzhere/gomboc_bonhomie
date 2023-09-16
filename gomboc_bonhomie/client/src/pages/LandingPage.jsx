import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = (changeFlip) => {

    return (
        <fieldset className="spacing">
            <legend>Homepage.jsx</legend>
            <h1>Gomboc Bonhomie</h1>
            <h1>"tagline goes here"</h1>
            <h2>Welcome to a site that puts the <strong>social</strong> back in social media</h2>
            <p>Gomboc Bonhomie loosely translates into Circle of Friends.</p>
            <p><strong>Gomboc</strong> is the mathmatically perfect shape. It's known for being perfectly balanced. It's also the Hungarian word for <i>sphere</i>.</p>
            <p><strong>Bonhomie</strong> is borrowed from the French <i>Bonhomme</i>; for <i>good man</i> or <i>good human being</i>.</p>
            <p>Together, they represent the sphere of good men or Circle of Friends. That's what out community is striving to be about. We want you to easily connect to those you're already close with IRL. We hope that the experience feels less intrusive and more natural for you.</p>
            <p>Our goal here is to continuosly implement features that make real social interactions more possible, while also giving you the power to recognize at a glance how much time you spend here and take back control of your life. Because life's too short to waste or spend it all alone.</p>
            <h5>Ready to get started? Click one of the links below!</h5>
            <h3>Login: <Link to={"/users/login"}>Click here</Link></h3>
            <h3>Register: <Link to={"/users/register"}>Click Here</Link></h3>
        </fieldset>
    )
}

export default LandingPage