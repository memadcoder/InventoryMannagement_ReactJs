import React, { useContext } from 'react';
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
import { DrugContext, DurgContext } from '../../Context/DrugContext';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStylesSpanning = makeStyles({
  table: {
    minWidth: 700
  }
});

const TableData = (data) => {
  console.log('selected drug data', data);
  console.log('data', data.data.length);
  const classes = useStylesSpanning();
  if (data.data.length) {
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
              {/* <TableCell align="right">{data.data[0].name}</TableCell>
              <TableCell align="right">{data.data[0].protein}</TableCell> */}
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

const DrugDetailTable = () => {
  const [drugs, setDrugs] = useContext(DrugContext);
  let { name } = useParams();

  return <TableData data={drugs.filter((data) => data.name === name)} />;
};

export default DrugDetailTable;
