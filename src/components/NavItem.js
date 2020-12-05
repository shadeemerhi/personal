import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ControlCamera } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'black'
    },
    width: '100%',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontSize: '10pt',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '12pt',
      border: '2px solid green'
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '16pt',
      border: '2px solid green'
    }
  },

  icon: {
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      margin: '0rem 1rem 0rem 0rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
      margin: '0rem 1.5rem 0rem 0rem'
    }
  },
}));

export default function NavItem(props) {

  const classes = useStyles();

  return(
    <Link to={props.url} className={classes.link}>
      <div className={classes.container}>
        <props.icon className={classes.icon}/>
        {props.name}
      </div>
    </Link>
    
  )
}