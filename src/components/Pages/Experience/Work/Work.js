import { makeStyles } from '@material-ui/core/styles';
import { workExperiences } from '../../../../data/work'
import WorkItem from './WorkItem';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

export default function Work() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      {workExperiences.map((experience, index) => {
        return (
          <WorkItem {...experience} play={index === 0}/>
        )
      })}
    </div>
  )
}