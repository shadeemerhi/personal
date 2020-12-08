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

export default function EducationItemHeader(props) {

  const classes = useStyles();

  return(
    <div>
      <Typography className={classes.company}>{props.school}</Typography>
      <Typography className={classes.title}>{props.program}</Typography>
      <Typography className={classes.date}>{props.date}</Typography>
    </div>
  )

}