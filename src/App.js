import React from 'react';
import './App.css';
import Search from './components/search/Search.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutProject from './components/about-project/AboutProject';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutProject />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
