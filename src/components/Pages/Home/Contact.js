import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { contactInfo } from '../../../data/contact';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display : 'flex',
    flexDirection: 'column',
    padding: '25px',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    width: '0%',
    marginTop: '1rem'
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    transition: '0.2s ease-in-out',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      color: '#1db954',
      textDecoration: 'none'
    }
  },

  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0rem 1rem 0rem',
  },

  text: {
    fontWeight: '500',
    marginLeft: '0.8rem'
  },

  title: {
    fontWeight: '900',
    width: '75px',
    borderBottom: '2px solid #1db954',
  },

  icon: {
    fontSize: '25pt'
  }
}));


export default function Contact(props) {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography className={classes.title}>CONTACT</Typography>
      <div className={classes.main}>
        <Link href={`mailto: ${contactInfo[0].value}`} target="_blank" className={classes.link}>
          <div className={classes.itemContainer}>
            <EmailIcon className={classes.icon}/>
            <Typography className={classes.text}>{contactInfo[0].value}</Typography>
          </div>
        </Link>
        <Link href={contactInfo[1].value} target="_blank" className={classes.link}>
          <div className={classes.itemContainer}>
            <LinkedInIcon className={classes.icon}/>
            <Typography className={classes.text}>LinkedIn</Typography>
          </div>
        </Link>
        <Link href={contactInfo[2].value} target="_blank" className={classes.link}>
          <div className={classes.itemContainer}>
            <GitHubIcon className={classes.icon}/>
            <Typography className={classes.text}>GitHub</Typography>
          </div>
        </Link>
      </div>
    </div>
  )
}