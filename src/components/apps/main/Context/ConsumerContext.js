import React, { useState, createContext } from 'react';

export const ConsumerContext = createContext();

export const ConsumerProvider = (props) => {
  const [consumers, setConsumers] = useState([
    {
      id: 1,
      name: 'David',
      sent: false,
      received: true
    },
    {
      id: 2,
      name: 'Rolando',
      sent: true,
      received: false
    },
    {
      id: 3,
      name: 'Messi',
      sent: false,
      received: false
    },
    {
      id: 4,
      name: 'Marcelo',
      sent: true,
      received: false
    }
  ]);

  const [headCells, setHeadCells] = useState([
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Consumer Name'
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
    <ConsumerContext.Provider value={[consumers, setConsumers, headCells]}>
      {props.children}
    </ConsumerContext.Provider>
  );
};
