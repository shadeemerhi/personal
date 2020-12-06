import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function About() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <p>
        A full-stack developer with a background in mechanical engineering currently seeking a full-time opportunity. 
        I strongly gravitate towards designing and developing applications that have a notable impact on large amounts 
        of people and solve real problems. I also love educating others. I have an entrepreneurial spirit and enjoy 
        leadership positions which I fully embrace on a daily basis running and growing HiOctave, a web design and 
        digital marketing agency. HiOctave allows me to explore my creativity in the areas of UI design, photography, 
        and videography, which in turn has immensely enhanced my creativity as both a programmer and a person.
      </p>
      <br/>
      <p>
        When I'm not at my computer, you can find me skiing, mountain biking, reading, or taking photos of the outdoors and/or food.
      </p>
    </div>
  )
}