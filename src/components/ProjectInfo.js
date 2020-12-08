import { makeStyles } from '@material-ui/core/styles';
import StackItem from './StackItem';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

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

  const classes = useStyles(props);

  return (
    <div>
      <Typography className={classes.description}>{props.description}</Typography>
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Typography className={classes.stackText} style={{borderBottom: 'none'}}>STACK</Typography>  
        </div>
        <div className={classes.stackContainer}>
          {props.stack.front.length !== 0 &&
          <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>FRONT:</Typography>
            <div className={classes.itemContainer}>
              {props.stack.front.map(item => {
                return <StackItem item={item}/>
              })}
            </div>
          </div>
          }
          {props.stack.back.length !== 0 &&
          <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>BACK:</Typography>
            <div className={classes.itemContainer}>
              {props.stack.back.map(item => {
                return <StackItem item={item}/>
              })}
            </div>
          </div>
          }
          {props.stack.deployment.length !== 0 &&
          <div className={classes.singleStackContainer}>
            <Typography className={classes.stackText}>DEPLOY:</Typography>
            <div className={classes.itemContainer}>
                {props.stack.deployment.map(item => {
                return <StackItem item={item}/>
              })}
            </div>
          </div>
          }
          {props.stack.test.length !== 0 &&
          <div className={classes.singleStackContainer}>
            <Typography className={classes.stackText}>TEST:</Typography>
            <div className={classes.itemContainer}>
                {props.stack.test.map(item => {
                return <StackItem item={item}/>
              })}
            </div>
          </div>
          }
          {props.stack.other.length !== 0 &&
          <div className={classes.singleStackContainer}>
            <Typography className={classes.stackText}>OTHER:</Typography>
            <div className={classes.itemContainer}>
                {props.stack.other.map(item => {
                return <StackItem item={item}/>
              })}
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )

}