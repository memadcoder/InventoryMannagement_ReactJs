import React from 'react';
import { Button, InputLabel, MenuItem } from '@material-ui/core';
import MSelect from '@material-ui/core/Select';

import AppBar from '@material-ui/core/AppBar';
import { Grid, TextField } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const quantityList = [1, 2, 3, 4, 5, 6];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const DoctorForm = () => {
  const classes = useStyless();
  const [value, setValue] = React.useState(0);
  const [productInfo, setProductInfo] = React.useState({});
  const [errorMessage, setError] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSaveNewProduct = () => {
    console.log('value', productInfo);

    if (
      productInfo.productName &&
      productInfo.category &&
      productInfo.purchasePrice &&
      productInfo.sellingPrice &&
      productInfo.quantity !== 'none' &&
      productInfo.genericName &&
      productInfo.company &&
      productInfo.expireDay
    ) {
      console.log('value', productInfo);
    } else {
      setOpen(true);
      setError('All Fields are Required *');
    }
  };

  const handleProductChange = (event, value) => {
    console.log('event and value', event, value);
    setProductInfo((prev) => {
      return { ...prev, [event]: value };
    });
    // setProductInfo()
  };

  const clearProduct = () => {
    setProductInfo({});
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        className="mb-3"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="General Information" {...a11yProps(0)} />
          <Tab label="Detail Information" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={12}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Product Name"
              autoFocus
              id="productName"
              name="productName"
              value={productInfo.productName}
              onChange={(event) =>
                handleProductChange('productName', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Category"
              id="category"
              name="category"
              value={productInfo.category}
              onChange={(event) =>
                handleProductChange('category', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={6}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Purchase Price"
              id="purchasePrice"
              name="purchasePrice"
              value={productInfo.purchasePrice}
              onChange={(event) =>
                handleProductChange('purchasePrice', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Selling Price"
              name="sellingPrice"
              value={productInfo.sellingPrice}
              onChange={(event) =>
                handleProductChange('sellingPrice', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={12}>
            <InputLabel htmlFor="mainCategory">Quantity</InputLabel>
            <MSelect
              // className="mt-8 mb-20"
              required
              fullWidth
              size="large"
              autoFocus
              value={productInfo.quantity || ''}
              onChange={(event) =>
                handleProductChange('quantity', event.target.value)
              }
              showSearch
              className="w-full"
              name="quantity"
            >
              <MenuItem value="none">-Select-</MenuItem>
              {Array.isArray(quantityList) &&
                quantityList.map((each) => (
                  <MenuItem value={each}>{each}</MenuItem>
                ))}
            </MSelect>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={6}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Generic Name "
              autoFocus
              id="genericName"
              name="genericName"
              value={productInfo.genericName || ''}
              onChange={(event) =>
                handleProductChange('genericName', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Company"
              autoFocus
              id="Company"
              name="Company"
              value={productInfo.company || ''}
              onChange={(event) =>
                handleProductChange('company', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={12}>
            <TextField
              className="mb-3"
              required
              id="expireDate"
              label="Expire Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true
              }}
              value={productInfo.expireDay || '2017-05-24'}
              onChange={(event) =>
                handleProductChange('expireDay', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              className="mb-3"
              variant="outlined"
              color="primary"
              size="small"
              onClick={onSaveNewProduct}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};
export default DoctorForm;
