import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function NavItem() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>Nav Item</p>
    </div>
  )
}