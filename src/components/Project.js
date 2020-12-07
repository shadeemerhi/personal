import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import StackItem from './StackItem';
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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('sm')]: {
      margin: 0,
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
    // border: '2px solid green',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '430px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '340px'
    }
  },

  description: {
    fontWeight: '500',
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
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    border: '1px solid #1db954',
    borderRadius: '20px'
  },

  singleStackContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.2rem 0rem 0.2rem 0rem'
  },

  itemContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  

  stackText: {
    fontWeight: '900', 
    fontSize: '10pt',
    borderBottom: '1px solid #1db954',
    [theme.breakpoints.down('xs')]: {
    },
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
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Typography className={classes.stackText} style={{borderBottom: 'none'}}>STACK</Typography>  
            </div>
            <div className={classes.stackContainer}>
              <div className={classes.singleStackContainer}>
              <Typography className={classes.stackText}>FRONT:</Typography>
              <div className={classes.itemContainer}>
                {props.stack.front.map(item => {
                  return <StackItem item={item}/>
                })}
              </div>
              </div>
              <div className={classes.singleStackContainer}>
                <Typography className={classes.stackText}>BACK:</Typography>
                <div className={classes.itemContainer}>
                    {props.stack.back.map(item => {
                    return <StackItem item={item}/>
                  })}
              </div>
              </div>
              <div className={classes.singleStackContainer}>
                <Typography className={classes.stackText}>OTHER:</Typography>
                <div className={classes.itemContainer}>
                    {props.stack.other.map(item => {
                    return <StackItem item={item}/>
                  })}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}