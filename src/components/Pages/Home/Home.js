import { useState } from 'react';
import SubNav from '../../Nav/SubNav';
import { links } from '../../../data/links/homeNav';
import About from './About/About';
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
      <SubNav subNavItem={subNavItem} setSubNavItem={setSubNavItem} links={links}/>
      <Switch>
        <Route path='/skills' component={Skills}>
        </Route>
        <Route path='/' component={() => <About textMain={links[0].textMain} textSub={links[0].textSub}/>}>
        </Route>
      </Switch>
    </div>
  )
}