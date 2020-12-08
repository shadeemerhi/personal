import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { projects } from '../../../../data/projects';
import LatestProjectImage from '../../Projects/Project/LatestProjectImage';
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
    '&:hover': {
      background: '#1db954'
    }
  },

  buttonText: {
    [theme.breakpoints.down('md')]: {
      fontSize: '10pt',

    },
  },


  stackContainer: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
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
    // justifyContent: 'space-between',
    padding: '0.2rem 1.5rem 1.5rem 1.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0.1rem 0.8rem 0.8rem 0.8rem',
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


  const classes = useStyles();

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
        <LatestProjectImage image={latestProject.image} className={classes.image}/>
        <div className={classes.info}>
          <ProjectDescription description={latestProject.description}/>
          <div className={classes.btnContainer}>
            <Button variant="outlined" className={classes.button} href="https://github.com/shadeemerhi/simplifix" target="_blank">
              <Typography className={classes.buttonText}>REPOSITORY</Typography>
            </Button>
            <Link to='/projects' className={classes.link}> 
              {/* <Button variant="outlined" className={classes.button} href="https://github.com/shadeemerhi">
              <Typography className={classes.buttonText}>MORE PROJECTS</Typography>
              </Button> */}
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.stackContainer}>
        <Stack className={classes.stack} {...latestProject.stack}/>
      </div>
    </Grid>
  )
}