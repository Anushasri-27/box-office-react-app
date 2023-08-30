import { Link } from "react-router-dom";

const LINK=[
{
 text:"Home",
 to:"/",

},
{
    text:"Contact",
    to:"/contact",


},
{
   text:"starred",
   to:"/starred",

}

]

function Nav(){
    return(
     <div>
        <ul>
            {
                LINK.map((item) => (
                       <li key={item.to}>
                              <Link to={item.to}>{item.text}</Link>
                       </li>          
                    ))
            }

        </ul>  
     </div>
    )
};

export default Nav;