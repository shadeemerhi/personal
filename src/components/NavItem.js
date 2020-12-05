import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 100
  }
}));

export default function NavItem() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p className={classes.root}>Nav Item</p>
    </div>
  )
}