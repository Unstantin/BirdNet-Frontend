import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import ObservationList from './components/ObservationList';
import ObservationForm from './components/ObservationForm';
import TaxonForm from './components/TaxonForm';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<AuthForm />} />
                <Route path="/observations" element={<ObservationList />} />
                <Route path="/create-observation" element={<ObservationForm />} />
                <Route path="/create-taxon" element={<TaxonForm />} />
            </Routes>
        </Router>
    );
};

export default App;