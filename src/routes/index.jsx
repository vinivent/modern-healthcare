import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Registered from "../pages/Registered";
import Home from "../pages/Home";
import Contact from "../pages/Contact";


function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Registered/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route/>
        </Routes>
    )
}

export default RoutesApp;