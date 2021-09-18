// React
import React, { useContext } from 'react';

// Contexts
import { DataContext } from '../../../contexts/DataContext';

// Custom components
import Project from './Project/Project';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Static data - TBDep.
import { projects } from '../../../data/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px'
  }
}));

const Projects = () => {
  const classes = useStyles();

  const { projectState } = useContext(DataContext);
  console.log('INSIDE PROJECTS', projects);

  return (
    <Grid container className={classes.root}>
      {projectState.projects.map(project => {
        return <Project
          key={project.id}
          {...project}
        />
      })}
    </Grid>
  )
}

export default React.memo(Projects);