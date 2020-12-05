import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '20px',
    border: '2px solid red',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '80px',
      padding: '0'
    }
  }
}));

export default function Nav() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <NavItem />
      <NavItem />
      <NavItem />
    </div>
  )
}