import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    height: '50px',
    justifyContent: 'space-around',
    border: '2px solid red',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      padding: '10px'
    }
  }
}));

export default function Nav() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <NavItem />
      <NavItem />
    </div>
  )
}