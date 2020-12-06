import { makeStyles } from '@material-ui/core/styles';
import test from '../data/images/test.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {


    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${test})`,
    // backgroundImage: `url(${test})`,
    backgroundSize: 'cover',
    height: '300px',
    position: 'relative'
  },

  overlay: {
    fontSize: '50pt',
    fontWeight: '900',
    position: 'absolute',
    bottom: '50px',
    left: '30px'
  }
}));

export default function Header() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography className={classes.overlay}>Shadee Merhi</Typography>
    </div>
  )
}