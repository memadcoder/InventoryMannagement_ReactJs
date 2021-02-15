import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  InputAdornment
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Face, Fingerprint } from '@material-ui/icons';
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

const RegisterForm = (props) => {
  const history = useHistory();
  const switchLogin = () => {
    history.push('/');
  };
  const { classes } = props;
  console.log('classes', props);

  return (
    <Paper className={classes.padding}>
      <Typography variant="h6" className="mt-16 mb-100">
        REGISTER
      </Typography>
      <div className={classes.margin}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            {/* <TextField id="username" label="Username" type="email" fullWidth autoFocus required /> */}
            <TextField
              className="mt-8 mb-16"
              // error={form.title === ""}
              required
              label="Email"
              autoFocus
              id="email"
              name="email"
              // value={form.emailOrUsername}
              // onChange={this.handleChange}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <EmailIcon/>
                    </InputAdornment>
                )
            }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              className="mt-8 mb-16"
              // error={form.title === ""}
              required
              label="Username"
              autoFocus
              id="username"
              name="username"
              // value={form.username}
              // onChange={this.handleChange}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <FaceIcon/>
                    </InputAdornment>
                )
            }}
            />
            {/* <TextField id="username" label="Password" type="password" fullWidth required /> */}
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              className="mt-8 mb-16"
              // error={form.title === ""}
              required
              label="Password"
              autoFocus
              id="password"
              name="password"
              // value={form.password}
              // onChange={this.handleChange}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <LockIcon/>
                    </InputAdornment>
                )
            }}
            />
            {/* <TextField id="username" label="Password" type="password" fullWidth required /> */}
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              className="mt-8 mb-16"
              // error={form.title === ""}
              required
              label="Re-Enter Password"
              autoFocus
              id="rePassword"
              name="rePassword"
              // value={form.rePassword}
              //  onChange={this.handleChange}
              variant="outlined"
              fullWidth
            />
            {/* <TextField id="username" label="Password" type="password" fullWidth required /> */}
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item></Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button
            class="btn btn-primary btn-block mt-3"
            variant="outlined"
            color="primary"
            style={{ textTransform: 'none' }}
          >
            Register
          </Button>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button
            class="btn btn-primary btn-block"
            variant="outlined"
            color="primary"
            style={{ textTransform: 'none' }}
            onClick={switchLogin}
          >
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(RegisterForm);
