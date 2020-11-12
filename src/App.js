import React, {Component, useState} from 'react';
import MainScreen from './MainScreeen';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './backgroundColor.css'

const Styles = styled.div`
  // .backgroundColor{
  //   background: linear-gradient(to right, #19adb1 0%,  #0a6dc3 100%);
  //   height: '100vh';
  // }
`;
const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    padding: theme.spacing(1),
    backgroundColor: 'white',
    color: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: 'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e8f1ed',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  multilineColor:{
    color:'white',
}
}));

export default function App(){
  const classes = useStyles();
  const [isLogged, setIsLoget]=useState(false)
  if(isLogged == true) return <MainScreen />;
  else {
    return (
      <div className='backgroundColor'>
      <Styles>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.Container}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon color="black"/>
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: 'white'}}>
            Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className={classes.textField}
            InputProps={{
              className: classes.multilineColor
            }}
            InputLabelProps={{
              style: { color: '#e8f1ed' },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.textField}
            InputProps={{
              className: classes.multilineColor
            }}
            InputLabelProps={{
              style: { color: '#e8f1ed' },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" style={{color:'#e8f1ed'}}/>}
            label="Remember me"
            
          />
        </form>
        </div>
      </Container>
      </Styles>
      </div>
    )
  }
}