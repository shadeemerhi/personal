import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { projects } from '../../../../data/projects';
import ProjectImage from '../../Projects/Project/ProjectImage';
import ProjectTitle from '../../Projects/Project/ProjectTitle';
import ProjectDescription from '../../Projects/Project/ProjectDescription';
import Stack from '../../Projects/Project/Stack';

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


export default function LatestProject(props) {

  const latestProject = projects[0];


  const classes = useStyles();

  return(
    <Grid item xs={12} className={classes.root}>
      <div className={classes.titleContainer}>
        <ProjectTitle 
          date={latestProject.date}
          url={latestProject.url}
          name={latestProject.name}
        />
      </div>
      <div className={classes.content}>
        <ProjectImage image={latestProject.image}/>
        <div className={classes.info}>
          <ProjectDescription description={latestProject.description}/>
          <Stack {...latestProject.stack}/>
        </div>
      </div>
    </Grid>
  )
}