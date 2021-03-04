function createData(name, date, sent, Received, protein) {
  return { name, date, sent, Received, protein };
}
function randomDate() {
  let start = new Date(2019, 0, 1);
  let end = new Date();
  let ans = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return ans.toLocaleDateString('en-US');
}

const rows = [
  createData('Cupcake', randomDate(), true, 67, 4.3),
  createData('Donut', randomDate(), false, 51, 4.9),
  createData('Eclair', randomDate(), false, 24, 6.0),
  createData('Frozen yoghurt', randomDate(), true, 24, 4.0),
  createData('Gingerbread', randomDate(), false, 49, 3.9),
  createData('Honeycomb', randomDate(), false, 87, 6.5),
  createData('Ice cream sandwich', randomDate(), 9.0, 37, 4.3),
  createData('Jelly Bean', randomDate(), true, 94, 0.0),
  createData('KitKat', randomDate(), true, 65, 7.0),
  createData('Lollipop', randomDate(), false, 98, 0.0),
  createData('Marshmallow', randomDate(), false, 81, 2.0),
  createData('Nougat', randomDate(), true, 9, 37.0),
  createData('Oreo', randomDate(), false, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const getComparator=(order, orderBy)=> {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const stableSort=(array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Drugs Name',
    },
    { id: 'date', numeric: true, disablePadding: false, label: 'date' },
    { id: 'sent', numeric: true, disablePadding: false, label: 'sent' },
    { id: 'Received', numeric: true, disablePadding: false, label: 'Received' },
    { id: 'Operation', numeric: true, disablePadding: false, label: 'Operation' },
  ];
  
export {headCells, rows};


 