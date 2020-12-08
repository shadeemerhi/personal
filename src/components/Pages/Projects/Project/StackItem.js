import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    border: '1px solid #b3b3b3',
    padding: '5px',
    borderRadius: '8px',
    fontSize: '10pt',
    fontWeight: '800',
    margin: '0.1rem 0.2rem 0.1rem 0.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '8pt'
    },
  }
}));

export default function StackItem(props) {

  const classes = useStyles(props);

  return(
      <Typography className={classes.text}>{props.item}</Typography>
  )
}