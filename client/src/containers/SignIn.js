import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../assets/tribestack-LOGO.png'
import background from '../assets/login-background.png'

const styles = theme => ({ 

    main: {
      width: 'auto',
      height:'100vh',
      display: 'block',
      // display: 'block', // Fix IE 11 issue.
      // marginLeft: theme.spacing.unit * 3,
      // marginRight: theme.spacing.unit * 3,
      // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      //   width: 400,
      //   marginLeft: 'auto',
      //   marginRight: 'auto',
      // }
    },
    card: {
      maxWidth: 400,
      justify: 'center',
      alignItems: 'center',
      padding: '20px'
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      padding: `${theme.spacing.unit * 2}px`,
      backgroundColor: "#343a40",
      marginTop: theme.spacing.unit * 5,
    },
  });
  
  function SignIn(props) {
    const { classes } = props;
  
    return (
      <Grid container spacing={0}
       direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <CssBaseline />
        <Card className={classes.card}>
          <img alt="TribeStack Logo" src={logo} />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="danger"
            className={classes.submit}
          >
            GitHub
          </Button>
          
        </Card>
      </Grid>
    );
  }
  
  SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SignIn);
