
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='*' element={<Pagenotfound></Pagenotfound>}></Route>
    </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
