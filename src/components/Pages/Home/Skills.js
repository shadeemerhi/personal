import { makeStyles } from '@material-ui/core/styles';
import { skills } from '../../../data/skills';
import Typography from '@material-ui/core/Typography';
import StackItem from '../Projects/Project/StackItem';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  name: {
    fontWeight: '900',
    marginRight: '1rem',
    borderBottom: '1px solid #1db954',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem'
    },
  },

  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  line: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0rem 1rem 0rem',
    borderRadius: '20px',
    padding: '10px',
    transition: '0.2s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', 
    },
  },

  itemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  }
}));

export default function Skills() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        {skills.map((section, index) => {
        return (
          <div key={index} className={classes.line}>
            <Typography className={classes.name}>{section.name}:</Typography>
              <div className={classes.itemContainer}>
                {section.items.map((item, index) => {
                  return <StackItem key={index} item={item}/>
                })}
              </div>
          </div>
        )
        })}
      </div>
    </div>
  )
}