import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  company: {
    fontWeight: '900',
    fontSize: '13pt',
    [theme.breakpoints.down('md')]: {
      fontSize: '12pt'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '11pt'
    },
  },

  title: {
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '11pt'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10pt'
    },
  },

  date: {
    color: '#b3b3b3',
    [theme.breakpoints.down('md')]: {
      fontSize: '11pt'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10pt'
    },
  },

  location: {
    color: '#b3b3b3',
    [theme.breakpoints.down('md')]: {
      fontSize: '11pt'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10pt'
    },
  }

}));

export default function WorkItemHeader(props) {

  const classes = useStyles();

  return(
    <div>
      <Typography className={classes.company}>{props.company}</Typography>
      <Typography className={classes.title}>{props.title}</Typography>
      <Typography className={classes.date}>{props.date}</Typography>
      <Typography className={classes.location}>{props.location}</Typography>
    </div>
  )

}