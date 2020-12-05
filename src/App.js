import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import Home from './components/Home';

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

export default function App() {

  const classes = useStyles();

  return(
    <Router>

      <Grid container >
        <Grid item xs={12} sm={3}>
          <Nav /> 
        </Grid>
        <Grid item xs={12} sm={9}>
          <Home /> 
        </Grid>
      </Grid>

      <Switch>
        <Route path="/"/>
        <Route path="/projects"/>
        <Route path="/education"/>
        <Route path="/experience"/>
      </Switch>
    </Router>
  )
}