import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Education() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>Education</p>
    </div>
  )
}