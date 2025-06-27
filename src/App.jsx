import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FixedIcons from './components/FixedIcons';
import { SidebarProvider } from './context/SidebarContext';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Cancellation from './components/Cancellation';
import Terms from './components/Terms';
import Flights from './components/Flights';
import Help from './components/Help';
import Profile from './components/Profile';
import FlightResults from './components/FlightResults';
import HotelResults from './components/HotelResults';
import { BookingProvider } from './context/BookingContext';
import AvailableCars from './components/AvailableCars';



function AppContent() {
  const location = useLocation();
  const hideNavAndIcons = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <LanguageProvider>
      <SidebarProvider>
        <ScrollToTop />
        <div className="app">
          {!hideNavAndIcons && <Navbar />}
          {!hideNavAndIcons && <FixedIcons />}

          {location.pathname === '/profile' ? (
            <Profile />
          ) : (
            <main 
              className={`main-content ${location.pathname.includes('/hotels') ? 'hotels-page' : ''}`}
              data-route={location.pathname === '/hotels/results' ? '/hotels/results' : undefined}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/available-cars" element={<AvailableCars />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/help" element={<Help />} />
                <Route path="/flights/results" element={<FlightResults />} />
                <Route path="/hotels/results" element={<HotelResults />} />
              </Routes>
            </main>
          )}
          {!hideNavAndIcons && <Footer />}
        </div>
      </SidebarProvider>
    </LanguageProvider>
  );
}

function App() {
  return (
    <Router>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </Router>
  );
}

export default App;
