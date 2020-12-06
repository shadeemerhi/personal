import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import test from '../data/images/test.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid red'
  },
  
  link: {
    textDecoration: 'none',
    borderBottom: '2px solid #1db954',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },

  text: {
    fontSize: '20pt',
  },

  image: {
  },

}));

export default function Project(props) {
  

  const classes = useStyles(props);

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Link href="" className={classes.link}>
        <Typography className={classes.text}>{props.name}</Typography>
      </Link>
      <img src={require(`../data/images/simplifix.png`)} alt="missing"/>
      {/* <div style={{
        height: '200px',
        border: '2px solid green',
        backgroundImage: `url(${test})`
      }}>
      </div> */}
    </Grid>
  )
}