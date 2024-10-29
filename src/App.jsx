import React from 'react';
import { Routes , Route } from 'react-router';
import HomePage from './Components/HomePage/HomePage';
import AddData from './Components/AddData/AddData';
import View from './Components/View/View';
import UpdateData from './Components/UpdateData/UpdateData';
import Header from './Components/Header/Header';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/add-data" element={<AddData />}/>
        <Route path="/view" element={<View />}/>
        <Route path="/update" element={<UpdateData />}/>
        <Route path="/view-details/:id" element={<View />}/>
      </Routes>
    </>
  )
}

export default App
