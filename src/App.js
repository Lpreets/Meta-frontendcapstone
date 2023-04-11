import React, { useReducer } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Fetch from './lib/Fetch'
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer'

const App = () => {

  const { fetchAPI, submitAPI } = Fetch();

  const initializeTimes = () => {
    const times = {
      times: [...fetchAPI(new Date())],
    };
    return times;
  };

  const updateTimes = (state, action) => {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      window.location.href = '/confirmedbooking';
    };
  };

  const availableTimes = useReducer(updateTimes, initializeTimes);

  return (
    <div className ="App">
      <Router basename="/meta-fec">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BookingPage" element={<BookingPage availableTimes={availableTimes} submitForm={submitForm} />} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;