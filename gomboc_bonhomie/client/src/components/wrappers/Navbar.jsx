import React from 'react';
import { Link } from 'react-router-dom';
// import  toast from "react-hot-toast";

const Navbar = () => {
    
    // const navigate = useNavigate()
    // const {user_id} = useParams();
    // IF WE NEEDED THE USER_ID AS A NUMBER, WE FIRST HAVE TO PARSE TO AN INT
    // console.log(parseInt(user_id))

    // const logout = e => {
    //     e.preventDefault()
    //     // MAKE THE AXIOS POST REQUEST TO EXPRESS
    //     axios.get("http://localhost:8000/api/users/logout")
    //     .then(res => {
    //         console.log(res.data)
    //         toast.success("logout suceess!")
    //         // changeFlip()
    //         navigate("/")
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         if(err.response.data)
    //         // Set Errors
    //         toast.error('Logout failed.');
    //     })
    // }

    return (
        <fieldset>
            {/* <legend>Navbar.jsx</legend> */}
                <ul className='navbar'>
                    <li>
                        <Link className='noDecorating' to={"/users/register"}><button>Register</button></Link>
                    </li>
                    <li>
                        <Link className='noDecorating' to={"/users/login"}><button>Login</button></Link>
                    </li>
                    <li>
                        <Link className='noDecorating' to={"/"}><button>Homepage</button></Link>
                    </li>
                    <li>
                        <Link to={"/broadcasts"}><button>Dashboard</button></Link>
                    </li>
                    <li>
                        <button>Logout (Future Update)</button>
                    </li>
                    {/* <li>
                        <Link to={"/broadcasts"}>Profile</Link>
                    </li> */}
                    {/* <li>
                        <button onClick={
                            logout
                            // () => {
                            // // console.log("LOGGING OUT...")
                            // // setLoggedIn(false);
                            // // localStorage.clear();
                            // }
                        }><Link className='noDecorating' to={"/"}>Logout</Link></button>
                    </li> */}
                </ul>
        </fieldset>
    )
}

export default Navbar