
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { Route,Routes } from 'react-router-dom';
import { useContextGlobalDentist } from "./Components/utils/global.context";


function App() {

  return (

      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>
        <Footer/>      
      </div>
  );
}

export default App;
