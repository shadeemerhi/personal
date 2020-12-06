import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Link } from 'react-router-dom'; 
import About from './About';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px'
  },

  linkContainer: {
    display: 'flex',
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    '&:visited': {
      color: 'white'
    }
  }
}));

export default function Home() {

  const classes = useStyles();

  return(
    <div className={classes.root}>

      <div className={classes.linkContainer}>
        <Link to="/about" className={classes.link}>
          <Typography>
            About
          </Typography>
        </Link>
        <Link to="/skills" className={classes.link}>
          <Typography>
            Skills
          </Typography>
        </Link>
      </div>

      <Switch>
        <Route path='/about' component={About}>
        </Route>
        <Route path='/skills' component={Skills}>
        </Route>
      </Switch>
    </div>
  )
}