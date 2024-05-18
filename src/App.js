import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import India from './components/India';
import Bangladesh from './components/Bangladesh';
import Japan from './components/Japan';
import Ukrain from './components/Ukrain';
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm';


const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/india' element={<India />} />
          <Route path='/bangladesh' element={<Bangladesh />} />
          <Route path='/japan' element={<Japan />} />
          <Route path='/ukrain' element={<Ukrain />} />
          <Route path="/register" element={<RegistrationForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
