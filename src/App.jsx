
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogform from './pages/Blogform'; 
import Notfound from './pages/Notfound';
import Header from './pages/Header';


export default function App() {
  return (
    <div>
      

      <Routes>
      <Route path="/" element={< Header/>} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Blogform" element={<Blogform />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}