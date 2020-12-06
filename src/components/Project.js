import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
// import test from '../data/images/simplifix.png';

// const images = require.context('../../public/images', true);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // border: '2px solid red',
    margin: '1rem 0rem 1rem 0rem',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  
  link: {
    textDecoration: 'none',
    borderBottom: '2px solid #1db954',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    fontSize: '20pt',
  },

  date: {
    fontSize: '7pt',
    fontWeight: '900',
    color: '#b3b3b3',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },

  image: {
    maxWidth: '500px',
    maxHeight: '300px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '270px'
    }
  },

  content: {
    display: 'flex',
    // border: '2px solid green',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '290px'
    }
  },

  description: {
    marginBottom: '1.5rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '10pt'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '10pt'
      },
    [theme.breakpoints.down('xs')]: {
      margin: '1.5rem 0rem 1.5rem 0rem',
      fontSize: '10pt'
    }
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0rem 1.5rem 1.5rem 1.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '1rem 0rem 1rem 0rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0rem 1.5rem 1.5rem 1.5rem'
    },
  },

  stackContainer: {
    padding: '10px',
    border: '1px solid #1db954',
    borderRadius: '20px'
  }
}));

export default function Project(props) {
  

  const classes = useStyles(props);

  return (
    <Grid item xs={12} className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.date}>{props.date}</Typography>
        <Link href="" className={classes.link}>
          <Typography className={classes.title}>{props.name}</Typography>
        </Link>
      </div>
      <div className={classes.content}>
        <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} alt="missing"/>
        <div className={classes.info}>
          <Typography className={classes.description}>{props.description}</Typography>
          <div className={classes.stackContainer}>
            <Typography></Typography>
            <Typography>STACK</Typography>
            <Typography>Thing 1</Typography>
            <Typography>Thing 2</Typography>
          </div>
        </div>
      </div>
    </Grid>
  )
}