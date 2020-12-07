import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Work() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>Work</p>
    </div>
  )
}