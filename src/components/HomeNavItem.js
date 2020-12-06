import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    borderBottom: props => {
      if (props.selected) {
        return '2px solid #1db954'
      } else {
        return null
      }
    },
    margin: '1rem 2rem 0rem 0rem',
    '&:visited': {
      color: 'white'
    }
  },

  text: {
    fontSize: '12pt',
    fontWeight: '900',
    color: props => {
      if (props.selected) {
        return 'white'
      } else {
        return '#b3b3b3'
      }
    },
  }
}));

export default function HomeNav(props) {

  const classes = useStyles(props);

  return(
    <Link to={props.url} className={classes.link} onClick={() => props.setHomeNavItem(props.name)}>
      <Typography className={classes.text}>
        {props.name}
      </Typography>
    </Link>
  )
}