// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/wrappers/Banner";
import Navbar from "./components/wrappers/Navbar";
// import WelcomeUser from "./components/wrappers/WelcomeUser";
import LandingPage from "./pages/LandingPage";
// -----FOR ONE PAGE LOGIN/REG-------------------
// import LoginReg from "./pages/LoginReg";
// import Login from "./components/Login";
// import Register from "./components/Register";
// -----FOR ONE PAGE LOGIN/REG-------------------
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBase from "./pages/AllUsers";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/EditUser";
import Dashboard from "./pages/Dashboard";
import BroadcastDetails from "./pages/BroadcastDetails";
import EditBroadcast from "./pages/EditBroadcast";
// import { Toaster } from "react-hot-toast";

function App() {

    return (
        <fieldset>
            <legend>App.jsx</legend>
            <Banner />
            <Navbar />
            {/* <WelcomeUser /> */}
            {/* <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} /> */}
            <Routes>
                {/* ------------------COMBINED ROUTES FOR LOGINREG PAGE----------------------------*/}
                {/* <Route path="/" element={<LoginReg />} /> */}
                {/* <Route path="/">
                    <Route index element={<LoginReg />} />
                    <Route path="users/loginreg/register" element={<Register />} />
                    <Route path="users/loginreg/login" element={<Login />} />
                </Route> */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users" element={<UserBase />} />
                <Route path="/users/:user_id" element={<UserDetails />} />
                <Route path="/users/edit/:user_id" element={<EditUser />} />
                <Route path="/broadcasts" element={<Dashboard />} />
                <Route path="/broadcasts/:broadcast_id" element={<BroadcastDetails />} />
                <Route path="/broadcasts/edit/:broadcast_id" element={<EditBroadcast />} />
            </Routes>
        </fieldset>
    );
}

export default App;
