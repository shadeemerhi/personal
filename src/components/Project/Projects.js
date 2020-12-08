import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../../data/projects';
import Project from './Project';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px'
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {projects.map(project => {
        return <Project
          key={project.id}
          {...project}
        />
      })}
    </Grid>
  )
}