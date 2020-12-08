import { makeStyles } from '@material-ui/core/styles';
import StackItem from './StackItem';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

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
    flexWrap: 'wrap',
    marginLeft: '0.7rem'
  },
  

  stackText: {
    fontWeight: '900', 
    fontSize: '10pt',
    borderBottom: '1px solid #1db954',
    [theme.breakpoints.down('xs')]: {
    },
  }
}));


export default function ProjectInfo(props) {

  const classes = useStyles();

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography className={classes.stackText} style={{borderBottom: 'none'}}>STACK</Typography>  
      </div>
      <div className={classes.stackContainer}>
        {props.front.length !== 0 &&
        <div className={classes.singleStackContainer}>
        <Typography className={classes.stackText}>FRONT:</Typography>
          <div className={classes.itemContainer}>
            {props.front.map(item => {
              return <StackItem item={item}/>
            })}
          </div>
        </div>
        }
        {props.back.length !== 0 &&
        <div className={classes.singleStackContainer}>
        <Typography className={classes.stackText}>BACK:</Typography>
          <div className={classes.itemContainer}>
            {props.back.map(item => {
              return <StackItem item={item}/>
            })}
          </div>
        </div>
        }
        {props.deployment.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>DEPLOY:</Typography>
          <div className={classes.itemContainer}>
              {props.deployment.map(item => {
              return <StackItem item={item}/>
            })}
          </div>
        </div>
        }
        {props.test.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>TEST:</Typography>
          <div className={classes.itemContainer}>
              {props.test.map(item => {
              return <StackItem item={item}/>
            })}
          </div>
        </div>
        }
        {props.other.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>OTHER:</Typography>
          <div className={classes.itemContainer}>
              {props.other.map(item => {
              return <StackItem item={item}/>
            })}
          </div>
        </div>
        }
      </div>
    </div>
  )
}