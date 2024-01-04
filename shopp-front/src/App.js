import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

import Header from './component/Header';
import ItemList from './component/ItemList';
import Hero from './component/Hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ItemList />
    </>
  );
}

export default App;
