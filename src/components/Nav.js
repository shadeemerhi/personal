import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid red'
  }
}));

export default function Nav() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>Navigation</h1>
    </div>
  )
}