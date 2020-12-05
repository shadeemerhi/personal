import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Projects</h1>
    </div>
  )
}