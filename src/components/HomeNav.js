import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import About from './About';
import Skills from './Skills';
import HomeNavItem from './HomeNavItem';
import { subLinks } from '../data/links'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px'
  },

  linkContainer: {
    display: 'flex'
  }
}));

export default function HomeNav() {

  const classes = useStyles();
  const [homeNavItem, setHomeNavItem] = useState('ABOUT')

  return(
    <div className={classes.root}>

      <div className={classes.linkContainer}>
        {subLinks.map(link => {
          return(
            <HomeNavItem
              key={link.id}
              {...link}
              setHomeNavItem={setHomeNavItem}
              selected={homeNavItem === link.name}
            />
          )
        })}
      </div>

      <Switch>
        <Route path='/skills' component={Skills}>
        </Route>
        <Route path='/' component={() => <About textMain={subLinks[0].textMain} textSub={subLinks[0].textSub}/>}>
        </Route>
      </Switch>
    </div>
  )
}