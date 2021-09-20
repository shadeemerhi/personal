import { makeStyles } from '@material-ui/core/styles';
import StackItem from './StackItem';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  stackContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    border: '1px solid #1db954',
    borderRadius: '20px',
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '290px'
    },
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


export default function Stack({ stack }) {

  const classes = useStyles();

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography className={classes.stackText} style={{borderBottom: 'none'}}>STACK</Typography>  
      </div>
      <div className={classes.stackContainer}>
        {stack.front.length !== 0 &&
        <div className={classes.singleStackContainer}>
        <Typography className={classes.stackText}>FRONT:</Typography>
          <div className={classes.itemContainer}>
            {stack.front.map((item, index) => {
              return <StackItem key={index} item={item}/>
            })}
          </div>
        </div>
        }
        {stack.back.length !== 0 &&
        <div className={classes.singleStackContainer}>
        <Typography className={classes.stackText}>BACK:</Typography>
          <div className={classes.itemContainer}>
            {stack.back.map((item, index) => {
              return <StackItem key={index} item={item}/>
            })}
          </div>
        </div>
        }
        {stack.deployment.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>DEPLOY:</Typography>
          <div className={classes.itemContainer}>
              {stack.deployment.map((item, index) => {
              return <StackItem key={index} item={item}/>
            })}
          </div>
        </div>
        }
        {stack.test.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>TEST:</Typography>
          <div className={classes.itemContainer}>
              {stack.test.map((item, index) => {
              return <StackItem key={index} item={item}/>
            })}
          </div>
        </div>
        }
        {stack.other.length !== 0 &&
        <div className={classes.singleStackContainer}>
          <Typography className={classes.stackText}>OTHER:</Typography>
          <div className={classes.itemContainer}>
              {stack.other.map((item, index) => {
              return <StackItem key={index} item={item}/>
            })}
          </div>
        </div>
        }
      </div>
    </div>
  )
}