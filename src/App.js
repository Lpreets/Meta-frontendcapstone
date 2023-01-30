import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom'
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

  const reduced = (state, action) => {
    const newBookingDate = action.setBookingDate;
    const newTime = fetchAPI(newBookingDate);
    return { times: [...newTime] };
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      window.location.href = '/confirmedbooking';
    };
  };

  const availableTimes = useReducer(reduced, initializeTimes); 

  return (
    <div className ="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/bookingpage" element={<BookingPage availableTimes={availableTimes} submitForm={submitForm} />} /> 
          <Route path="/components/confirmedbooking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;