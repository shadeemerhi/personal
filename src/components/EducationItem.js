// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EducationItemHeader from './EducationItemHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    transition: '0.2s ease-in-out',
    border: play => play ? '1px solid #1db954' : '1px solid #b3b3b3',
    margin: '1rem 0rem 1rem 0rem',
    borderRadius: '20px',
    '&:hover': {
      // border: '1px solid white'
      border: play => play ? '1px solid #1db954' : '1px solid white'
    }
  },

  main: {

  },

  info: {
    display: 'flex',
    textAlign: 'right',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  items: {
    marginTop: '1rem'
  },

  image: {
    // maxWidth: '100px',
    maxHeight: '100px',
    // [theme.breakpoints.down('sm')]: {
    //   maxHeight: '450px'
    // },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '75px'
    }
  },

  playBtn: {
    fontSize: '40pt',
    transition: '0.1s ease-in-out',
    color: play => play ? 'white' : '#b3b3b3',
    '&:hover': {
      color: 'white',
      fontSize: '41pt',
      cursor: 'pointer',
    },
    '&:active': {
      fontSize: '39pt',
      // transform: 'translateY(4px)'
    }
  }

}));

export default function EducationItem(props) {


  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.info}>
          {/* <PlayCircleOutlineIcon className={classes.playBtn} onClick={() => setPlay(!play)}/>
           */}
           <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} alt="education" className={classes.image}/>
          <EducationItemHeader {...props}/>
        </div>
      </div>
      {/* {play && 
        <div className={classes.items}>
          {props.items.map(item => {
            return (
              <WorkTaskItem item={item}/>
            )
          })}
        </div>
      } */}
    </div>
  )

}