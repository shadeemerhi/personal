import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LatestProject from './LatestProject';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '14pt',
    fontWeight: '900',
    margin: '1rem 0rem 1rem 0rem'
  },

  text: {
    margin: '1rem 0rem 1rem 0rem'
  }
}));


export default function About(props) {

  const classes = useStyles();

  return(
    <div>
      <Typography className={classes.text}>{props.textInspo}</Typography>
      <br/>
      <Typography className={classes.title}>Mini Bio</Typography>
      <Typography className={classes.text}>{props.textMain}</Typography>
      <Typography className={classes.text}>{props.textSubMain}</Typography>
      <br/>
      <Typography>{props.textSub}</Typography>
      <br/>
      <Typography className={classes.title}>Latest Release</Typography>
      <LatestProject />
    </div>
  )
}