import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


}));

export default function WorkItem(props) {

  // console.log(props);
  const classes = useStyles();

  return(
    <div>
      <Typography>{props.company}</Typography>
      <Typography>{props.title}</Typography>
      <Typography>{props.date}</Typography>
      <Typography>{props.location}</Typography>
    </div>
  )

}