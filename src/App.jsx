import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Starred from './pages/Starred';
import Mainlayout from './components/Mainlayout';
import Show from './pages/Show';
import GlobalTheme from './theme';
// Create a client outside of the component
const queryClient = new QueryClient();


function App() {
  return (
    //client-side navigation
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Starred" element={<Starred />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
          <Route path="/shows/:ShowId" element={<Show />} />
          <Route path="*" element={<div>PAGE NOT FOUND</div>}></Route>
        </Routes>
      </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
