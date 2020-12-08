import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Experience from './components/Pages/Experience/Experience';
import Header from './components/Header';

export default function App() {

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