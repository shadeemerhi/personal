import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  image: {
    maxWidth: '500px',
    maxHeight: '300px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '450px'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '330px'
    }
  },

}));

export default function Project(props) {
  
  const classes = useStyles();

  return (
    <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} alt="project"/>
  )
}