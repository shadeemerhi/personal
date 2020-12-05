import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid red'
  }
}));

export default function Home() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h1>Home</h1>
    </div>
  )
}