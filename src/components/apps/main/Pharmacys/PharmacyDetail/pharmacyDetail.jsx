import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import { rows } from '../../../common/data';
import { PharmacyContext } from '../../Context/PharmacyContext';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';

const useStylesSpanning = makeStyles({
  table: {
    minWidth: 700
  }
});

const TableData = (data) => {
  console.log('data', data);
  const classes = useStylesSpanning();
  if (data) {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{data.data[0].name}</TableCell>
              <TableCell align="right">value</TableCell>
              <TableCell align="right">{data.data[0].name}</TableCell>
              {/* <TableCell align="right">{data.data[0].protein}</TableCell> */}
            </TableRow>

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    <div></div>;
  }
};

const PharmacyDetailTable = () => {
  const [pharmacy] = useContext(PharmacyContext);
  let { name } = useParams();
  return <TableData data={pharmacy.filter((data) => data.name === name)} />;
};

export default PharmacyDetailTable;
