import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';

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
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import DrugListTable from '../Drugs/DrugTable/Table';
import ConsumerListTable from '../Consumers/ConsumerTable/Table';
import DoctorListTable from '../Doctors/DoctorTable/Table';
import PharmacyListTable from '../Pharmacys/PharmacyTable/Table';

import DrugForm from '../Drugs/DrugForm/drugForm';
import ConsumerForm from '../Consumers/ConsumerForm/consumerForm';
import DoctorForm from '../Doctors/DoctorForm/doctorForm';
import PharmacyForm from '../Pharmacys/PharmacyForm/pharmacyForm';

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
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

export default function PersistentDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [entryStatus, setEntryStatus] = React.useState({
    drugEntry: false,
    consumerEntry: false,
    doctorEntry: false,
    pharmacyEntry: false
  });

  const [listStatus, setListStatus] = React.useState({
    drugList: true,
    consumerList: false,
    doctorList: false,
    pharmacyList: false
  });

  const [addItemName, setAddNewItemName] = React.useState('Drug');

  const [drawerTitle, setDrawerTitle] = React.useState('Drugs List');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('entry status', entryStatus);
    console.log('list status', listStatus);
  }, [entryStatus, listStatus]);

  const setDrawer = (index) => {
    if (index === 0) {
      setDrawerTitle('Drugs List');
      setAddNewItemName('Drug');
      setListStatus({
        drugList: true,
        consumerList: false,
        doctorList: false,
        pharmacyList: false
      });
      setEntryStatus({
        drugEntry: false,
        consumerEntry: false,
        doctorEntry: false,
        pharmacyEntry: false
      });
    } else if (index === 1) {
      setDrawerTitle('Consumers List');
      setAddNewItemName('consumer');

      setListStatus({
        drugList: false,
        consumerList: true,
        doctorList: false,
        pharmacyList: false
      });
      setEntryStatus({
        drugEntry: false,
        consumerEntry: false,
        doctorEntry: false,
        pharmacyEntry: false
      });
    } else if (index === 2) {
      setDrawerTitle('Doctors List');
      setAddNewItemName('doctor');

      setListStatus({
        drugList: false,
        consumerList: false,
        doctorList: true,
        pharmacyList: false
      });
      setEntryStatus({
        drugEntry: false,
        consumerEntry: false,
        doctorEntry: false,
        pharmacyEntry: false
      });
    } else if (index === 3) {
      setDrawerTitle('Pharmacy List');
      setAddNewItemName('pharmacy');
      setListStatus({
        drugList: false,
        consumerList: false,
        doctorList: false,
        pharmacyList: true
      });
      setEntryStatus({
        drugEntry: false,
        consumerEntry: false,
        doctorEntry: false,
        pharmacyEntry: false
      });
    } else {
      setDrawerTitle('Drugs List');
      setAddNewItemName('drug');

      setListStatus({
        drugList: true,
        consumerList: false,
        doctorList: false,
        pharmacyList: false
      });
      setEntryStatus({
        drugEntry: false,
        consumerEntry: false,
        doctorEntry: false,
        pharmacyEntry: false
      });
    }
  };

  const setDrugEntryTable = () => {
    setDrawerTitle('New Drug Entry');
    setListStatus({
      drugList: false,
      consumerList: false,
      doctorList: false,
      pharmacyList: false
    });
    setEntryStatus({
      drugEntry: true,
      consumerEntry: false,
      doctorEntry: false,
      pharmacyEntry: false
    });
  };

  const setConsumerEntryTable = () => {
    setDrawerTitle('New Consumer Entry');
    setListStatus({
      drugList: false,
      consumerList: false,
      doctorList: false,
      pharmacyList: false
    });
    setEntryStatus({
      drugEntry: false,
      consumerEntry: true,
      doctorEntry: false,
      pharmacyEntry: false
    });
  };
  const setDoctorEntryTable = () => {
    setDrawerTitle('New Doctor Entry');

    setListStatus({
      drugList: false,
      consumerList: false,
      doctorList: false,
      pharmacyList: false
    });
    setEntryStatus({
      drugEntry: false,
      consumerEntry: false,
      doctorEntry: true,
      pharmacyEntry: false
    });
  };
  const setPharmacyEntryTable = () => {
    setDrawerTitle('New Pharmacy Entry');

    setListStatus({
      drugList: false,
      consumerList: false,
      doctorList: false,
      pharmacyList: false
    });
    setEntryStatus({
      drugEntry: false,
      consumerEntry: false,
      doctorEntry: false,
      pharmacyEntry: true
    });
  };

  const showModal = () => {
    if (addItemName === 'drug') {
      setDrugEntryTable(true);
    } else if (addItemName === 'consumer') {
      setConsumerEntryTable(true);
    } else if (addItemName === 'doctor') {
      setDoctorEntryTable(true);
    } else if (addItemName === 'pharmacy') {
      setPharmacyEntryTable(true);
    } else {
      setDrugEntryTable(true);
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
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        ModalProps={{ onBackdropClick: handleDrawerClose }}
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          Medical Record Keeping
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
      </SwipeableDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        {entryStatus.drugEntry ? <DrugForm func={handleDrawerClose} /> : <></>}
        {entryStatus.doctorEntry ? (
          <DoctorForm func={handleDrawerClose} />
        ) : (
          <></>
        )}
        {entryStatus.consumerEntry ? (
          <ConsumerForm func={handleDrawerClose} />
        ) : (
          <></>
        )}
        {entryStatus.pharmacyEntry ? (
          <PharmacyForm func={handleDrawerClose} />
        ) : (
          <></>
        )}

        {listStatus.drugList ? <DrugListTable /> : <></>}
        {listStatus.consumerList ? <ConsumerListTable /> : <></>}
        {listStatus.pharmacyList ? <PharmacyListTable /> : <></>}
        {listStatus.doctorList ? <DoctorListTable /> : <></>}
      </main>
    </div>
  );
}
