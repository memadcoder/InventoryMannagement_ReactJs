import React, { useEffect } from 'react';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import DrugListTable from '../Drugs/DrugTable/Table';
import ConsumerListTable from '../Consumers/ConsumerTable/Table';
import DoctorListTable from '../Doctors/DoctorTable/Table';
import PharmacyListTable from '../Pharmacys/PharmacyTable/Table';

import DrugForm from '../Drugs/DrugForm/drugForm';
import ConsumerForm from '../Consumers/ConsumerForm/consumerForm';
import DoctorForm from '../Doctors/DoctorForm/doctorForm';
import PharmacyForm from '../Pharmacys/PharmacyForm/pharmacyForm';

import AnalyticsHome from '../Home/home';

import routes from '../routes/routeUrl';

import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '50px',
    marginRight: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    // overflowX: 'hidden',
    // overflowY: 'scroll'
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [addItemName, setAddNewItemName] = React.useState('');
  const [drawerTitle, setDrawerTitle] = React.useState('');
  const [home, setHome] = React.useState(true);
  const [formActive, setFormActive] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('props', props);
  });

  const setDrawer = (index) => {
    setFormActive(false);
    setHome(false);
    if (index === 0) {
      setDrawerTitle('Drugs List');
      setAddNewItemName('drug');
      history.push(routes.drugs.list);
    } else if (index === 1) {
      setDrawerTitle('Consumers List');
      setAddNewItemName('consumer');
      history.push(routes.consumers.list);
    } else if (index === 2) {
      setDrawerTitle('Doctors List');
      setAddNewItemName('doctor');
      history.push(routes.doctors.list);
    } else if (index === 3) {
      setDrawerTitle('Pharmacy List');
      setAddNewItemName('pharmacy');
      history.push(routes.pharmacy.list);
    } else {
      setDrawerTitle('');
      setAddNewItemName('');
      setHome(true);
      history.push(routes.home.dashboard);
    }
  };

  const showModal = () => {
    setHome(false);
    setFormActive(true);
    if (addItemName === 'drug') {
      setDrawerTitle('New Drug Entry');
      history.push(routes.drugs.form);
    } else if (addItemName === 'consumer') {
      setDrawerTitle('New Consumer Entry');
      history.push(routes.consumers.form);
    } else if (addItemName === 'doctor') {
      setDrawerTitle('New Doctor Entry');
      history.push(routes.doctors.form);
    } else if (addItemName === 'pharmacy') {
      setDrawerTitle('New Pharmacy Entry');
      history.push(routes.pharmacy.form);
    } else {
      setHome(true);
      history.push(routes.home.dashboard);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {drawerTitle}
          </Typography>
          {!home && !formActive ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={showModal}
              className={classes.button}
              startIcon={<AddCircleIcon />}
              style={{ marginLeft: 'auto' }}
            >
              Add New {addItemName}
            </Button>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          Medical Record Keeping
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Drugs', 'Consumers', 'Doctors', 'Pharmacists'].map(
            (text, index) => (
              <ListItem onClick={() => setDrawer(index)} button key={text}>
                <ListItemIcon>
                  {text === 'Drugs' ? <ListIcon /> : <></>}
                  {text === 'Consumers' ? <PeopleIcon /> : <></>}
                  {text === 'Doctors' ? <LocalHospitalIcon /> : <></>}
                  {text === 'Pharmacists' ? <LocalPharmacyIcon /> : <></>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider style={{ marginTop: '100px' }} />
        <List>
          {['SETTING', 'LOGOUT'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text === 'SETTING' ? <SettingsIcon /> : <></>}
                {text === 'LOGOUT' ? <ExitToAppIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={AnalyticsHome} />
          <Route exact path="/drugs" component={DrugListTable} />
          <Route exact path="/consumers" component={ConsumerListTable} />
          <Route exact path="/doctors" component={DoctorListTable} />
          <Route exact path="/pharmacy" component={PharmacyListTable} />
          <Route exact path="/drugs/newentry" component={DrugForm} />
          <Route exact path="/consumers/newentry" component={ConsumerForm} />
          <Route exact path="/doctors/newentry" component={DoctorForm} />
          <Route exact path="/pharmacy/newentry" component={PharmacyForm} />
        </Switch>
      </main>
    </div>
  );
}
