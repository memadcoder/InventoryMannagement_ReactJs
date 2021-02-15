import React from 'react';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

const LoginForm = (props) => {
  const history = useHistory();
  const switchRegister = () => {
    history.push('/register');
  };

  const { classes } = props;
  console.log('classes login', classes);
  return (
    <Paper className={classes.padding} >
      <Typography variant="h6" className="mt-16 mb-32" spacing={3}>
        LOGIN TO YOUR ACCOUNT
      </Typography>
      <div className={classes.margin}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={true} sm={true} xs={true}>
            {/* <TextField id="username" label="Username" type="email" fullWidth autoFocus required /> */}
            <TextField
              className="mt-8 mb-16"
              // error={form.title === ""}
              required
              label="Email/Username"
              autoFocus
              id="emailOrUsername"
              name="emailOrUsername"
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
        <Grid container spacing={8} alignItems="flex-end">
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
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              style={{ textTransform: 'none' }}
              variant="text"
              color="primary"
            >
              Forgot password ?
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button
            variant="outlined"
            class="btn btn-primary btn-block mt-3"
            style={{ textTransform: 'none' }}
          >
            Login
          </Button>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button
            variant="outlined"
            class="btn btn-primary btn-block "
            style={{ textTransform: 'none' }}
            onClick={switchRegister}
          >
            Register
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(LoginForm);
