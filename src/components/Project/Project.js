import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectInfo from './ProjectInfo';
import ProjectImage from './ProjectImage';
import ProjectTitle from './ProjectTitle';

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
        <ProjectTitle 
          date={props.date}
          url={props.url}
          name={props.name}
        />
      </div>
      <div className={classes.content}>
        <ProjectImage image={props.image}/>
        <div className={classes.info}>
          <ProjectInfo {...props}/>
        </div>
      </div>
    </Grid>
  )
}