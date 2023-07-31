import logo from './logo.svg';
import './App.css';
import PersonalDetailsPage from './Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Thanks from './Thanks';
import ReactGA from 'react-ga';
ReactGA.initialize('G-8Q35GW0451');


function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<PersonalDetailsPage/>}/>
<Route path='/thanks' element={<Thanks/>}/>
    
    </Routes>
  
    
    </BrowserRouter>
  );
}

export default App;
