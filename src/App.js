import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Header from './components/Header';

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
          <Header />
          <Switch>
            <Route path="/projects" component={Projects}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/experience"/>
            <Route path="/" component={Home}/>
          </Switch>
        </Grid>
      </Grid>


    </Router>
  )
}