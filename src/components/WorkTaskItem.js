import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function WorkTaskItem(props) {

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography>{props.item}</Typography>
    </div>
  )

}