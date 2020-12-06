import { makeStyles } from '@material-ui/core/styles';
import test from '../data/images/test.jpg';
import Typography from '@material-ui/core/Typography';

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
    left: '10px',
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

}));

export default function Header() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography className={classes.overlay}>Shadee Merhi</Typography>
    </div>
  )
}