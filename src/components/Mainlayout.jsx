import { Outlet } from "react-router-dom";
import Nav from "./Nav";
function Mainlayout(){
return(
    <div>
         <Nav />
        <Outlet />
    </div>
)

};

export default Mainlayout;