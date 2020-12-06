import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
    padding: '25px',
    fontSize: '8pt',
    fontWeight: '700',
    color: 'white',
    borderRadius: '20px',
    background: props => props.selected ? '#1db954' : 'none',
    transition: '0.2s ease-in-out',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '12pt',
      '&:hover': {
        background: '#1db954',
      }
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '14pt',
    }
  },

  icon: {
    fontSize: '1.5rem',
    color: 'white',
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

  const classes = useStyles(props);

  return(
    <Link to={props.url} className={classes.link} onClick={() => props.setNavItem(props.name)}>
      <div className={classes.container}>
        <props.icon className={classes.icon}/>
        {props.name}
      </div>
    </Link>
    
  )
}