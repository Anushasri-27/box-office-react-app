import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Starred from "./pages/Starred";
import Mainlayout from "./components/Mainlayout";
import Show from "./pages/Show";

function App() {
  return (
    //client-side navigation
     <BrowserRouter>
         <Routes>
          < Route element={<Mainlayout />} >
              <Route path="/" element={ <Home /> } ></Route>
              <Route path="/Starred" element={ <Starred />}></Route>
              <Route path="/contact" element={<Contact  />} ></Route>
          </Route>
          <Route path="/show/:ShowId" element={<Show />}/>
          <Route path="*" element={<div>PAGE NOT FOUND</div>}   ></Route> 
         </Routes>
     </BrowserRouter>
  );
}

export default App;
