import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';
import { links } from '../data/links/mainNav'

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    height: '50px',
    background: '#121212',
    justifyContent: 'space-around',
    alignItems: 'center',
    // minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      height: '100%',
      // paddingTop: '50px',
    }
  }
}));

export default function Nav() {

  const classes = useStyles();
  const [navItem, setNavItem] = useState('Home')

  return(
    <div className={classes.root}>
      {links.map(link => {
        return (
          <NavItem
            key={link.id}
            {...link}
            selected={link.name === navItem}
            setNavItem={setNavItem}
          />
        )
      })}
    </div>
  )
}