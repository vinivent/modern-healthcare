import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Registered from "../pages/Registered";
import Home from "../pages/Home";

import Treatment from "../pages/Treatment";
import Professionals from "../pages/Professionals";
import Location from "../pages/Location";


function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Registered/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/treatment" element={<Treatment/>}/>
            <Route path="/qualifiedcare" element={<Professionals/>}/>
            <Route path="/nearbycare" element={<Location/>}/>
            <Route/>
        </Routes>
    )
}

export default RoutesApp;