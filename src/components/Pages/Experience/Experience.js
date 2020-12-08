import { useState } from 'react';
import SubNav from '../../Nav/SubNav';
import { links } from '../../../data/links/experienceNav';
import Work from './Work/Work';
import Education from './Education/Education';
// import Volunteer from './Volunteer/Volunteer';
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


export default function Experience() {

  const classes = useStyles();
  const [subNavItem, setSubNavItem] = useState('WORK')

  return(
    <div className={classes.root}>
      <SubNav subNavItem={subNavItem} setSubNavItem={setSubNavItem} links={links}/>
      <Switch>
        <Route path='/experience/education' component={Education}>
        </Route>
        {/* <Route path='/experience/volunteer' component={Volunteer}>
        </Route> */}
        <Route path='/experience' component={Work}>
        </Route>
      </Switch>
    </div>
  )
}