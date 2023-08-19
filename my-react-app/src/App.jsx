// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h1>Welcome to KeeProp</h1>
        <p>Find your perfect rental property without any hassle.</p>
        {/* Your property listings, forms, etc. go here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
