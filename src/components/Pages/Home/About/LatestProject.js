import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { projects } from '../../../../data/projects';
import ProjectImage from '../../Projects/Project/ProjectImage';
import LatestProjectTitle from '../../Projects/Project/LatestProjectTitle';
import ProjectDescription from '../../Projects/Project/ProjectDescription';
import Stack from '../../Projects/Project/Stack';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '1rem 0rem 1rem 0rem',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },

  link: {
    textDecoration: 'none',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      flexDirection: 'column',
    },
  },

  imageText: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '430px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '340px'
    }
  },


  button: {
    fontFamily: 'proxima-nova, sans-serif',
    fontWeight: '500',
    borderRadius: '20px',
    color: 'white',
    borderColor: "#1db954",
    transition: '0.2s ease-in-out',
    marginRight: '0.5rem',
    '&:hover': {
      background: '#1db954'
    }
  },

  buttonText: {
    fontSize: '10pt',
    [theme.breakpoints.down('md')]: {
      fontSize: '9pt',

    },
  },

  stackButton: {
    fontFamily: 'proxima-nova, sans-serif',
    fontWeight: '500',
    borderRadius: '20px',
    color: 'white',
    background: stack => stack ? '#1db954' : 'none',
    borderColor: "#1db954",
    transition: '0.2s ease-in-out',
    marginLeft: '0.5rem',
    // marginBottom: '2rem',
    '&:hover': {
      background: stack => stack ? 'none' : '#1db954'
      // background: '#1db954'
    }
  },


  stackContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  toggleStackContainer: {
    display: 'flex',
    minWidth: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem 0rem 1rem 0rem',
    [theme.breakpoints.down('md')]: {
      minWidth: '50%'
    },
  },

  stack: {
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.7rem 1.5rem 1.5rem 1.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0.5rem 0.8rem 0.8rem 0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0rem 1rem 1rem 1rem'
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


}));


export default function LatestProject(props) {

  const latestProject = projects[0];

  const [stack, setStack] = useState(false);


  const classes = useStyles(stack);

  return(
    <Grid item xs={12} className={classes.root}>
      <div className={classes.titleContainer}>
        <LatestProjectTitle 
          date={latestProject.date}
          url={latestProject.url}
          name={latestProject.name}
        />
      </div>
      <div className={classes.imageText}>
        <ProjectImage image={latestProject.image} className={classes.image}/>
        <div className={classes.info}>
          <ProjectDescription description={latestProject.description}/>
          <div className={classes.btnContainer}>
            <Button variant="outlined" className={classes.button} href={latestProject.url} target="_blank">
              <Typography className={classes.buttonText}>SOURCE CODE</Typography>
            </Button>
            {!stack &&
          <Button variant="outlined" className={classes.stackButton} onClick={() => setStack(!stack)}>
          <Typography className={classes.buttonText}>VIEW STACK</Typography>
          </Button>
          }
          {stack &&
            <Button variant="outlined" className={classes.stackButton} onClick={() => setStack(!stack)}>
            <Typography className={classes.buttonText}>CLOSE STACK</Typography>
          </Button>
          }
          <Link to='/projects' className={classes.link}> 
          </Link>
          </div>
        </div>
      </div>
      <div className={classes.stackContainer}>
        <div className={classes.toggleStackContainer}>
          {stack && <Stack className={classes.stack} {...latestProject.stack}/>}
        </div>
      </div>
    </Grid>
  )
}