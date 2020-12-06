import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px'
  }
}));

export default function Project(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <h1>{props.name}</h1>
    </Grid>
  )
}