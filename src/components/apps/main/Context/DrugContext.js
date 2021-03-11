import React, { useState, createContext } from 'react';

export const DrugContext = createContext();

export const DrugProvider = (props) => {
  const [drugs, setDrugs] = useState([
    {
      id: 1,
      name: 'Paracetamol',
      sent: false,
      received: true
    },
    {
      id: 2,
      name: 'Sinex',
      sent: true,
      received: false
    },
    {
      id: 3,
      name: 'Rinex',
      sent: false,
      received: false
    },
    {
      id: 4,
      name: 'Pnetaprajol',
      sent: true,
      received: false
    }
  ]);

  const [headCells, setHeadCells] = useState([
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Drug Name'
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
    <DrugContext.Provider value={[drugs, setDrugs, headCells]}>
      {props.children}
    </DrugContext.Provider>
  );
};
