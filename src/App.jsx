import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CustomerForm />} />
    </Routes>
  </Router>
);

export default App;
