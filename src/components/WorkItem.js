import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkTaskItem from './WorkTaskItem';
import WorkItemHeader from './WorkItemHeader';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    border: '1px solid #1db954',
    margin: '1rem 0rem 1rem 0rem',
    borderRadius: '20px'
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

  },

  playBtn: {
    fontSize: '40pt',
    transition: '0.1s ease-in-out',
    color: play => play ? 'white' : '#b3b3b3',
    '&:hover': {
      fontSize: '42pt',
      cursor: 'pointer',
    },
    '&:active': {
      fontSize: '40pt',
      // transform: 'translateY(4px)'
    }
  }

}));

export default function WorkItem(props) {
  
  
  const [play, setPlay] = useState(false);

  const classes = useStyles(play);
  return(
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.info}>
          <PlayCircleOutlineIcon className={classes.playBtn} onClick={() => setPlay(!play)}/>
          <WorkItemHeader {...props}/>
        </div>
      </div>
      { play && 
        <div className={classes.items}>
          {props.items.map(item => {
            return (
              <WorkTaskItem item={item}/>
            )
          })}
        </div>
      }
    </div>
  )

}