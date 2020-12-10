import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LatestProject from './LatestProject';

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '14pt',
    fontWeight: '900',
    margin: '1rem 0rem 1rem 0rem'
  }
}));


export default function About(props) {

  const classes = useStyles();

  return(
    <div>
      <Typography className={classes.text}>Mini Bio</Typography>
      <Typography>{props.textMain}</Typography>
      <br/>
      <Typography>{props.textSub}</Typography>
      <br/>
      <Typography className={classes.text}>Latest Release</Typography>
      <LatestProject />
    </div>
  )
}