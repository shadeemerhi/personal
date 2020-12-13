import { makeStyles } from '@material-ui/core/styles';
import ProgressiveImage from 'react-progressive-graceful-image';

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

export default function ProjectImage(props) {
  
  const classes = useStyles();
  const placeholder = (
    <div className={classes.image} style={{background: 'grey'}}
    />
  )

  return (
    <ProgressiveImage src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} placeholder="">
      {(src, loading) => {
        return loading ? placeholder : <img src={`${process.env.PUBLIC_URL}/images/${props.image}`} className={classes.image} alt="project"/>
      }}
    </ProgressiveImage>
  )
}