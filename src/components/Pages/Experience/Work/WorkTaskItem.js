import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.2rem 0rem 0.2rem 0rem'
  },

  text: {
    fontSize: '12pt',
    [theme.breakpoints.down('md')]: {
      fontSize: '11pt'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10pt'
    },
  },

  icon: {
    fontSize: '6pt',
    marginRight: '0.5rem'
  }
}));

export default function WorkTaskItem(props) {

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <FiberManualRecordIcon className={classes.icon}/>
      <Typography className={classes.text}>{props.item}</Typography>
    </div>
  )

}