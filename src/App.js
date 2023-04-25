import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar, Home, About} from './Pages'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/About' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
