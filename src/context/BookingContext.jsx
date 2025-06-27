import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [activeFlight, setActiveFlight] = useState(null);

  const hasActiveFlight = !!activeFlight;

  const addFlightBooking = (flightData) => {
    setActiveFlight(flightData);
  };

  const clearFlightBooking = () => {
    setActiveFlight(null);
  };

  const value = {
    activeFlight,
    hasActiveFlight,
    addFlightBooking,
    clearFlightBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}; 