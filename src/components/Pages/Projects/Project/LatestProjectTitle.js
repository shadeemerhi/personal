import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({

  link: {
    textDecoration: 'none',
    color: 'white',
    borderBottom: '2px solid #1db954',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },

  title: {
    fontSize: '16pt',
    fontWeight: '900'
  },

  date: {
    fontSize: '7pt',
    fontWeight: '900',
    color: '#b3b3b3',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },

}));

export default function LatestProjecTitle(props) {
  
  const classes = useStyles();

  return (
    <Fragment>
      <Typography className={classes.date}>{props.date}</Typography>
      <Link href={props.url} target="_blank" className={classes.link}>
        <Typography className={classes.title}>{props.name}</Typography>
      </Link>
    </Fragment>
  )
}