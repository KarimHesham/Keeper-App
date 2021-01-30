import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { amber, yellow } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer"


const useStyles = makeStyles((theme) => ({
  body: {
    
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.warning.dark,
    color: "#fff",
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
  }
  },
  signupText: {
    color: "#fff",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: yellow,
  },
});


export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const [newUser, setnewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });

  
function handleChange (event) {
  const { name, value } = event.target;

    setnewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
}

function handleSubmit(event)  {
  event.preventDefault();

  axios.post("https://thisiskeeper.herokuapp.com/signup", newUser)
  .then(res => {
      history.push("/notes/"+newUser.username)
  })
  .catch(err => console.log(err));
  }
    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <ThemeProvider theme={theme}>
            <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                color = "primary"
                value={newUser.firstName}
                onChange = {handleChange}
                className={classes.textField}
              />
            </ThemeProvider>
               
            </Grid>
            <Grid item xs={12} sm={6}>
            <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={newUser.lastName}
                onChange = {handleChange}
              />
            </ThemeProvider>
              
            </Grid>
            <Grid item xs={12}>
            <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={newUser.username}
                onChange = {handleChange}
              />
            </ThemeProvider>
              
            </Grid>
            <Grid item xs={12}>
            <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={newUser.email}
                onChange = {handleChange}
              />
            </ThemeProvider>
              
            </Grid>
            <Grid item xs={12}>
            <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={newUser.password}
                onChange = {handleChange}
              />
            </ThemeProvider>
             
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            className={classes.submit}   
            
          >
            <span className={classes.signupText}>Sign Up</span>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="https://thisiskeeper.herokuapp.com/signin" variant="body2" color="textSecondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}

