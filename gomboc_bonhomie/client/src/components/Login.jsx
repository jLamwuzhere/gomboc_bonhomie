// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import  toast from "react-hot-toast";

// const Login = (changeFlip) => {
//     const navigate = useNavigate()

//     const [loginState, setLoginState] = useState({
//         email: "",
//         password: ""
//     })

//     const [loginErrorState, setLoginErrorState] = useState([])


//     const loginChangeHandler = e => {
//         setLoginState({
//             ...loginState,
//             [e.target.name]: e.target.value
//         })
//     }
    


//     const loginSubmit = e => {
//         e.preventDefault()
//         // MAKE THE AXIOS POST REQUEST TO EXPRESS
//         axios.post("http://localhost:8000/api/users/loginreg" , loginState, { withCredentials: true })
//         .then(res => {
//             console.log(res.data)
//             toast.success("Login suceess!")
//             // changeFlip()
//             navigate("/broadcasts")
//         })
//         .catch(err => {
//             console.log(err);
//             const { errors } = err.response.data;
//             const loginErrObj = {}
//             for (const [key, value] of Object.entries(errors)) {
//                 console.log(errors[key])
//                 loginErrObj[key] = value;
//             }
//             if(err.response.data)
//             // Set Errors
//             setLoginErrorState(loginErrObj)
//             toast.error('Login failed. Please check your credentials.');
//         })
//     }

    
    

//     return (
//         <fieldset>
//             <legend>Main.jsx</legend>
//             <h1>Login</h1>
//             <form onSubmit={loginSubmit}>
//                 <p>
//                     <strong>Email:</strong>
//                     <input name="email" type="text" className="inputBox"  placeholder="yomama@myplace.com" onChange={ loginChangeHandler } />
//                     {/* This line is to display errors in-line coming from an error array object */}
//                     {(loginErrorState.email) ? <small className="warning">{loginErrorState.email.message}</small> : null}
//                 </p>
//                 <p>
//                     <strong>Password:</strong>
//                     <input name="password" type="text" className="inputBox"  placeholder="mybirthday" onChange={ loginChangeHandler } />
//                     {/* This line is to display errors in-line coming from an error array object */}
//                     {(loginErrorState.password) ? <small className="warning">{loginErrorState.password.message}</small> : null}
//                 </p>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
            
//         </fieldset>
//     )
// }

// export default Login