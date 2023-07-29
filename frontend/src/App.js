import logo from './logo.svg';
import './App.css';
import PersonalDetailsPage from './Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Thanks from './Thanks';

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
