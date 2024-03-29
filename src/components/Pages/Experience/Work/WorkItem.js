import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkTaskItem from './WorkTaskItem';
import WorkItemHeader from './WorkItemHeader';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

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

export default function WorkItem(props) {

  const [play, setPlay] = useState(props.play);
  const classes = useStyles(play);

  return(
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.info}>
          {!play && <PlayCircleOutlineIcon className={classes.playBtn} onClick={() => setPlay(!play)}/>}
          {play && <PauseCircleOutlineIcon className={classes.playBtn} onClick={() => setPlay(!play)}/>}
          <WorkItemHeader {...props}/>
        </div>
      </div>
      {play && 
        <div className={classes.items}>
          {props.items.map((item, index) => {
            return (
              <WorkTaskItem key={index} item={item}/>
            )
          })}
        </div>
      }
    </div>
  )

}