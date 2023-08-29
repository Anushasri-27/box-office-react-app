import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
     <BrowserRouter>
         <Routes>
              <Route path="/" element={ <Home />} ></Route>
              <Route path="/contact" element={<div ><Contact /></div>} ></Route>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
