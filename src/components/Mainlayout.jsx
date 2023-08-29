import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import AppTitle from "./AppTitle";
function Mainlayout(){
return(
    <div>
         <Nav />
         <AppTitle />
         <Outlet />
    </div>
)

};

export default Mainlayout;