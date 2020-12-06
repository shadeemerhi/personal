// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//   }
// }));

export default function About(props) {

  // const classes = useStyles();

  return(
    <div>
      <p>{props.textMain}</p>
      <br/>
      <p>{props.textSub}</p>
    </div>
  )
}