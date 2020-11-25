import React, {Component, useState, useEffect} from 'react';
import MainScreen from './MainScreeen';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './backgroundColor.css'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: 'white'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
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
  },
}));

export default function App(){
  return(
  <Router>
    <Switch>
    <Route exact path="/">
      <LogIn />
    </Route>
    <Route path="/MainScreen">
      <MainScreen />
    </Route>
    <Route path="/SignUp">
      <SignUp />
    </Route>
    </Switch>
  </Router>
  )}
// }
function LogIn(){
  const classes = useStyles();
  const [isLogged, setIsLoged]=useState(false);
  const[email, setEmail]=useState('');
  const [pass, setPass]= useState('');
  const [emailCf, setEmailCf]=useState('');
  const [passCf, setPassCf] = useState('');

  let history = useHistory()

  async function onSubmit(){
    // if((email == emailCf) && (pass == passCf)){
    //   setIsLoged(true);
    //   console.log(isLogged);
    //   history.push("/MainScreen")
    // }

    if((email == 'admin@admin.com') && (pass == 'admin')){
      setIsLoged(true);
      console.log(isLogged);
      history.push("/MainScreen")
    }
  }
  // useEffect(() => {
  //   axios.post('http://localhost:5000/api/user/signin', {email: email, password: pass})
  //   .then(function(res){
  //     // console.log(res.data);
  //     setEmailCf(res.data[0].email);
  //     setPassCf(res.data[0].password);
  //     // console.log(res.data[0].email)
  //   })
  //   .catch(function(error){console.log(error)})
  // })
  const updateEmail = (text) =>{
    setEmail(text);
  }
  return (
    <div className='backgroundColor'>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.Container}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon color="black" style={{fontSize: 40}}/>
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: 'white'}}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
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
            value={email} onInput={e => setEmail(e.target.value)}
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
            value={pass} onInput={e => setPass(e.target.value)}
            />
            <FormControlLabel
            control={<Checkbox value="remember" style={{color:'#e8f1ed'}}/>}
            label="Remember me"
            />
            <Button
            // onClick={onSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color='#e8f1ed'
            className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color: '#e8f1ed'}}>
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item >
                <Link href="#" variant="body2" style={{color: '#e8f1ed'}}>
                  To log in, use "fake" for both Text Field.
                </Link>
              </Grid> */}
              {/* <Grid item>
                <Link href="/SignUp" variant="body2" style={{color: '#e8f1ed'}} 
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Container>
    </div>
    )
}
function SignUp(){
  const classes = useStyles();
  let history = useHistory();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [ emailUp, setEmailUp]= useState('');
  const[passUp, setPassUp] = useState('');

  async function onCreate() {
    const data = {
      name: firstName + " " + lastName,
      email: emailUp,
      password: passUp
    };
    let res = await axios.post('http://localhost:5000/api/user/signup', data)
    console.log(res.data)
  }
  return (
    <div className='backgroundColor'>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.Container}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon color="black" style={{fontSize: 40}}/>
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: 'white'}}>
            Sign up
          </Typography>
          <form className={classes.form} noValidate >
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              className={classes.textField}
            InputProps={{
              className: classes.multilineColor
            }}
            InputLabelProps={{
              style: { color: '#e8f1ed' },
            }}
            value={firstName} onInput={e => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              className={classes.textField}
            InputProps={{
              className: classes.multilineColor
            }}
            InputLabelProps={{
              style: { color: '#e8f1ed' },
            }}
            value={lastName} onInput={e => setLastName(e.target.value)}
            />
          </Grid>
          </Grid>
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
            value={emailUp} onInput={e => setEmailUp(e.target.value)}
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
            value={passUp} onInput={e => setPassUp(e.target.value)}
            />
            <FormControlLabel
            control={<Checkbox value="remember" style={{color:'#e8f1ed'}}/>}
            label="Remember me"
            />
            <Button
            onClick={onCreate}
            type="submit"
            fullWidth
            variant="contained"
            color='#e8f1ed'
            className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color: '#e8f1ed'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2" style={{color: '#e8f1ed'}}
                // onClick={() =>history.push("/LogIn") }
                >
                  {"Already have an account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
    )
}
const testLogged={
  email: 'test@gmail.com',
  password: 'test',
}