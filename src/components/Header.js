import { makeStyles } from '@material-ui/core/styles';
import test from '../data/images/test.jpg';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(33, 33, 33, 1)), url(${test})`,
    // backgroundImage: `url(${test})`,
    backgroundSize: 'cover',
    height: '260px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: '350px'
    },
  },

  overlay: {
    fontSize: '30pt',
    fontWeight: '900',
    position: 'absolute',
    bottom: '10px',
    left: '15px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '44pt',
      left: '25px',
      bottom: '60px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '56pt',
      left: '25px',
      bottom: '60px'

    }
  },

  name: {
    fontSize: '30pt',
    fontWeight: '900',
    [theme.breakpoints.up('sm')]: {
      fontSize: '44pt',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '56pt',

    }
  },

  labelContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  label: {
    fontSize: '9pt',
    fontWeight: '900',
    margin: '0rem 0.5rem 0rem 0rem'
  }

}));

export default function Header() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.overlay}>
        <div className={classes.labelContainer}>
          <Typography className={classes.label}>DEVELOPER</Typography>
          <CheckCircleIcon style={{color: '#147efb'}}/>
        </div>
        <Typography className={classes.name}>Shadee Merhi</Typography>
      </div>
    </div>
  )
}