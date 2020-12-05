import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ControlCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'black'
    },
    width: '100%'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12pt',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      border: '2px solid green'
    }
  }
}));

export default function NavItem(props) {

  const classes = useStyles();

  return(
    <Link to={props.url} className={classes.link}>
      <div className={classes.container}>
        <props.icon/>
        {props.name}
      </div>
    </Link>
    
  )
}