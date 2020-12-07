import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Volunteer() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>Volunteer</p>
    </div>
  )
}