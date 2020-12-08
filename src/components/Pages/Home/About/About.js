import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LatestProject from './LatestProject';

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '14pt',
    fontWeight: '900',
    marginTop: '1rem'
  }
}));


export default function About(props) {

  const classes = useStyles();

  return(
    <div>
      <Typography className={classes.text}>Latest Release</Typography>
      <LatestProject />
      <Typography className={classes.text}>Mini Bio</Typography>
      <p>{props.textMain}</p>
      <br/>
      <p>{props.textSub}</p>
    </div>
  )
}