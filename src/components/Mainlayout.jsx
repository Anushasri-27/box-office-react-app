import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import AppTitle from "./AppTitle";
function Mainlayout(){
return(
    <div>
          <AppTitle />
           <Nav />
         <Outlet />
    </div>
)

};

export default Mainlayout;