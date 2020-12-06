import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Home() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>About</h1>
    </div>
  )
}