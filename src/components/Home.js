import { useState } from 'react';
import SubNav from './SubNav';
import { subLinks } from '../data/links';
import About from './About';
import Skills from './Skills';
import { Route, Switch } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px'
  },

  linkContainer: {
    display: 'flex'
  }
}));


export default function Home() {

  const classes = useStyles();
  const [subNavItem, setSubNavItem] = useState('ABOUT')

  return(
    <div className={classes.root}>
      <SubNav subNavItem={subNavItem} setSubNavItem={setSubNavItem} links={subLinks}/>
      <Switch>
        <Route path='/skills' component={Skills}>
        </Route>
        <Route path='/' component={() => <About textMain={subLinks[0].textMain} textSub={subLinks[0].textSub}/>}>
        </Route>
      </Switch>
    </div>
  )
}