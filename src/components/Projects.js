import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../data/projects';
import Project from './Project';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Projects() {
  const classes = useStyles();


  return (
    <Grid container>
      {projects.map(project => {
        return <Project
          {...project}
        />
      })}
    </Grid>
  )
}