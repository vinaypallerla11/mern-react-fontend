import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Shop from './components/Shop'
import Stories from './components/Stories'
import Contactus from './components/Contactus'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm';
// import Header from './components/Header'
// import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<Home />} />
          <Route path="/register" element={<RegistrationForm />}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
