import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './components/Cadastro';


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
