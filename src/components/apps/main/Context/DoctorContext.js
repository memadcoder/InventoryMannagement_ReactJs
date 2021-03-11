import React, { useState, createContext } from 'react';

export const DoctorContext = createContext();

export const DoctorProvider = (props) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Madhav Gautam',
      sent: false,
      received: true
    },
    {
      id: 2,
      name: 'Sagar Devkota',
      sent: true,
      received: false
    },
    {
      id: 3,
      name: 'Nabin Bhatta',
      sent: false,
      received: false
    },
    {
      id: 4,
      name: 'Aashish Tiwari',
      sent: true,
      received: false
    }
  ]);

  const [headCells, setHeadCells] = useState([
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Doctor Name'
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
    <DoctorContext.Provider value={[doctors, setDoctors, headCells]}>
      {props.children}
    </DoctorContext.Provider>
  );
};
