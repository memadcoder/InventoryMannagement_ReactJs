import React, { useState, createContext } from 'react';

export const DrugContext = createContext();

export const DrugProvider = (props) => {
  const [drugs, setDrugs] = useState([
    {
      id: 1,
      name:'Paracetamol alskjdfl',
      category: 'cetamol asldkfjsdfsadf asdfdasf',
      purchasePrice: 5,
      sellingPrice: 10,  
      }
  ]);

  const [headCells, setHeadCells] = useState([
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Drug Name'
    },
    { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
    { id: 'purchasePrice', numeric: true, disablePadding: false, label: 'Purchased Price' },
    { id: 'sellingPrice', numeric: true, disablePadding: false, label: 'Selling Price' },
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
