import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import ProjectInfo from './ProjectInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '1rem 0rem 1rem 0rem',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    }
  },
  
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

  titleContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      flexDirection: 'column',
    },
  },

  title: {
    fontSize: '20pt',
    fontWeight: '900'
  },

  date: {
    fontSize: '7pt',
    fontWeight: '900',
    color: '#b3b3b3',
    marginLeft: '1rem',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
  },

  image: {
    maxWidth: '500px',
    maxHeight: '300px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '450px'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '330px'
    }
  },

  content: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '430px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '340px'
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

}));

export default function Project(props) {
  

  const classes = useStyles(props);

  return (
    <Grid item xs={12} className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.date}>{props.date}</Typography>
        <Link href={props.url} target="_blank" className={classes.link}>
          <Typography className={classes.title}>{props.name}</Typography>
        </Link>
      </div>
      <div className={classes.content}>
        <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} alt="project"/>
        <div className={classes.info}>
          <ProjectInfo {...props}/>
        </div>
      </div>
    </Grid>
  )
}