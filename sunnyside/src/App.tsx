import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
