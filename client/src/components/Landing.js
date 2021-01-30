import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import HighlightIcon from "../../node_modules/@material-ui/icons/Highlight";
import "../css/landing.css";
import Footer from "./Footer";


  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: "5%",
    },
    submit: {
      margin: theme.spacing(0, 0, 2),
      backgroundColor: theme.palette.warning.dark,
      color: "#fff",
      '&:hover': {
        backgroundColor: theme.palette.warning.main,
    }
    },
    submitOutline: {
      margin: theme.spacing(1, 0, 2),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.warning.dark,
      textTransform: "none",
      fontWeight: "500",
      borderColor: theme.palette.background.default,
      '&:hover': {
        borderColor: theme.palette.warning.dark,
        backgroundColor: theme.palette.background.default,
        textDecoration: "none",
    }
    },
    signupText: {
      color: "#fff",
      
    },
    orText: {
      marginLeft: "48%",
      color: theme.palette.text.secondary,
      fontWeight: "100",
    },
    span: {
      '&:hover': {
        textDecoration: "none",
    }
  }
  
  }));

export default function Home() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
    <CssBaseline />
    
    <Grid item xs={12}>
      <div className="Home">
            <div className="lander">
            <HighlightIcon className="logo" />
                <h1>Keeper</h1>
                <p className="text-muted">Quickly capture what's on your mind</p>
            </div>
            </div>
    </Grid>    
        
            <Grid item xs={12}>
        <Link href="https://stormy-castle-74654.herokuapp.com/signup">
        <Button
            type="submit"
            fullWidth
            className={classes.submit}   
        >
          <span className={classes.signupText}>Sign Up</span>
        </Button>
        </Link> 
        </Grid>

        <Grid item xs={12}>
            <span className={classes.orText}>or</span>     
        </Grid>
        <Grid item xs={12}>
        <Link href="http://localhost:3001/signin">
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submitOutline}   
          >
            <span>Login</span>
          </Button>
        </Link>
        </Grid>
    <Footer />
    </Container>
    
  );
}