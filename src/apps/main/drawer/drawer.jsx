import React from 'react';
import clsx from 'clsx';
import { Button, InputLabel, MenuItem } from '@material-ui/core';
import MSelect from '@material-ui/core/Select';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import MailIcon from '@material-ui/icons/Mail';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid, TextField } from '@material-ui/core';


import ProductListTable from '../products/ProductTable/Table';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const quantityList = [1, 2, 3, 4, 5, 6];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ScrollableTabsButtonAuto = () => {
  const classes = useStyless();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
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
              // value={prequisites.productName}
              // onChange={(event) =>
              //   this.handleMultiChange(
              //     'prequisites',
              //     'productName',
              //     event.target.value
              //   )
              // }
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
              autoFocus
              id="category"
              name="category"
              // value={prequisites.category}
              // onChange={(event) =>
              //   this.handleMultiChange(
              //     'prequisites',
              //     'category',
              //     event.target.value
              //   )
              // }
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
              autoFocus
              id="purchasePrice"
              name="purchasePrice"
              // value={prequisites.purchasePrice}
              // onChange={(event) =>
              //   this.handleMultiChange('purchasePrice', event.target.value)
              // }
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
              autoFocus
              id="sellingPrice"
              name="sellingPrice"
              // value={prequisites.sellingPrice}
              // onChange={(event) =>
              //   this.handleMultiChange('sellingPrice', event.target.value)
              // }
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
              // className="mt-8 mb-16"
              required
              fullWidth
              size="large"
              // value={form.quantity || ''}
              showSearch
              className="w-full"
              name="quantity"
              // onChange={this.handleChange}
              // onChange={(val) => this.setForm('quantity', val)}
            >
              <MenuItem value="none">-Select-</MenuItem>
              {Array.isArray(quantityList) &&
                quantityList.map((each) => (
                  <MenuItem value={each}>{each}</MenuItem>
                ))}
            </MSelect>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Quantity "
              autoFocus
              id="quantity"
              name="quantity"
              // value={prequisites.quantity}
              onChange={(event) =>
                this.handleMultiChange('quantity', event.target.value)
              }
              variant="outlined"
              fullWidth
            />
          </Grid> */}
        </Grid>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={12}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Generic Name "
              autoFocus
              id="genericName"
              name="genericName"
              // value={prequisites.genericName}
              // onChange={(event) =>
              //   this.handleMultiChange('genericName', event.target.value)
              // }
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-end" xs={12}>
          <Grid item xs={12}>
            <TextField
              // error={prequisites.error === ''}
              className="mb-3"
              required
              label="Company"
              autoFocus
              id="Company"
              name="Company"
              // value={prequisites.Company}
              // onChange={(event) =>
              //   this.handleMultiChange('Company', event.target.value)
              // }
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
                shrink: true,
              }}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
};

export default function PersistentDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [productList, setProductList] = React.useState(true);
  const [productEntry, setProductEntry] = React.useState(false);

  const [drawerTitle, setDrawerTitle] = React.useState('Product Lists');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setDrawer = (index) => {
    if (index === 0) {
      setProductEntry(false);

      setProductList(true);
      setDrawerTitle('Product Lists');
    } else {
      setProductList(false);
    }
  };

  const setProductEntryTable = (index) => {
    setProductList(false);
    setProductEntry(true);
    setDrawerTitle('New Entry');
  };


  const showModal = () => {
    setProductEntryTable(true);
  };



  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ flex: 1, flexDirection: 'row' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {drawerTitle}
          </Typography>
          {productList ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={showModal}
              className={classes.button}
              startIcon={<AddCircleIcon />}
              style={{ marginLeft: 'auto' }}
            >
              Add New Product
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        ModalProps={{ onBackdropClick: handleDrawerClose }}
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          Inventory Management
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Product Lists'].map((text, index) => (
            <ListItem onClick={() => setDrawer(index)} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ListIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ListIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </SwipeableDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {productEntry ? (
          <ScrollableTabsButtonAuto func={handleDrawerClose} />
        ) : (
          <></>
        )}
        {productList ? <ProductListTable /> : <></>}
      </main>
    </div>
  );
}
