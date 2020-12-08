import { makeStyles } from '@material-ui/core/styles';
import LatestProject from './LatestProject';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));


export default function About(props) {

  const classes = useStyles();

  return(
    <div>
      <LatestProject />
      <p>{props.textMain}</p>
      <br/>
      <p>{props.textSub}</p>
    </div>
  )
}