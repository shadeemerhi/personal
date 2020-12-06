import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Skills() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>Skills</p>
    </div>
  )
}