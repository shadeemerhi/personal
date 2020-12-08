// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../../../data/projects';
import Project from '../Projects/Project/Project';

// const useStyles = makeStyles((theme) => ({
//   root: {
//   }
// }));


export default function About(props) {

  const latestProject = projects[0];


  // const classes = useStyles();

  return(
    <div>
      <Project {...latestProject}/>
      <p>{props.textMain}</p>
      <br/>
      <p>{props.textSub}</p>
    </div>
  )
}