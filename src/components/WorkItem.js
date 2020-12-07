import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WorkTaskItem from './WorkTaskItem';
import WorkItemHeader from './WorkItemHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #1db954',
    margin: '1rem 0rem 1rem 0rem',
    borderRadius: '20px'
  },

  main: {

  },

  info: {

  },

}));

export default function WorkItem(props) {

  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.info}>
          <WorkItemHeader {...props}/>
        </div>
      </div>
      {props.items.map(item => {
        return (
          <WorkTaskItem item={item}/>
        )
      })}
    </div>
  )

}