import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  image: {
    maxWidth: '500px',
    // maxHeight: '300px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '330px'
    }
  },

}));

export default function LatestProjectImage(props) {
  
  const classes = useStyles();

  return (
    <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} alt="project"/>
  )
}