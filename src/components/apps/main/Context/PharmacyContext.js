import React, { useState, createContext } from 'react';

export const PharmacyContext = createContext();

export const PharmacyProvider = (props) => {
  const [pharmacy, setPharmacy] = useState([
    {
      id: 1,
      name: 'Gandaki Pharmacy',
      sent: false,
      received: true
    },
    {
      id: 2,
      name: 'Bagmati Pharmacy',
      sent: true,
      received: false
    },
    {
      id: 3,
      name: 'Dhaulagiri Pharmacy',
      sent: false,
      received: false
    },
    {
      id: 4,
      name: 'Lumbini Pharmacy',
      sent: true,
      received: false
    }
  ]);

  const [headCells, setHeadCells] = useState([
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Pharmacy Name'
    },
    { id: 'date', numeric: true, disablePadding: false, label: 'date' },
    { id: 'sent', numeric: true, disablePadding: false, label: 'sent' },
    { id: 'Received', numeric: true, disablePadding: false, label: 'Received' },
    {
      id: 'Operation',
      numeric: true,
      disablePadding: false,
      label: 'Operation'
    }
  ]);


  return (
    <PharmacyContext.Provider value={[pharmacy, setPharmacy, headCells]}>
      {props.children}
    </PharmacyContext.Provider>
  );
};
