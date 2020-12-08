import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(33, 33, 33, 1)), url(${process.env.PUBLIC_URL}/images/test4.jpg)`,
    backgroundSize: 'cover',
    height: '260px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      height: '350px'
    },
  },

  overlay: {
    fontWeight: '900',
    position: 'absolute',
    bottom: '0px',
    left: '15px',
    // border: '2px solid red',
    [theme.breakpoints.up('md')]: {
      fontSize: '44pt',
      left: '25px',
      bottom: '0px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '56pt',
      left: '25px',
      bottom: '0px'

    }
  },

  name: {
    fontFamily: 'proxima-nova, sans-serif',
    fontSize: '28pt',
    fontWeight: '800',
    [theme.breakpoints.up('sm')]: {
      fontSize: '44pt',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '56pt',

    }
  },

  labelContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  label: {
    fontFamily: 'proxima-nova, sans-serif',
    fontSize: '9pt',
    fontWeight: '600',
    margin: '0rem 0.5rem 0rem 0rem'
  },

  buttonContainer: {
    display: 'flex',
    height: '35px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  button: {
    fontFamily: 'proxima-nova, sans-serif',
    fontWeight: '500',
    borderRadius: '20px',
    margin: '0rem 1rem 0rem 0rem',
    color: 'white',
    borderColor: "#1db954",
    transition: '0.2s ease-in-out',
    '&:hover': {
      background: '#1db954'
    }
  },

  buttonText: {
    fontSize: '9pt',
  },

  buttonIcon: {
    
  },

  iconContainer: {
    marginTop: '0.5rem',
    height: '35px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  icon: {
    textDecoration: 'none',
    margin: '0rem 2rem 0rem 0rem',
    color: 'white',
    transition: '0.2s ease-in-out',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      color: '#1db954'
    }
  }

}));

export default function Header() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.overlay}>
        <div className={classes.labelContainer}>
          <Typography className={classes.label}>FULL STACK DEVELOPER</Typography>
          <CheckCircleIcon style={{color: '#147efb'}}/>
        </div>
        <Typography className={classes.name}>Shadee Merhi</Typography>
        <div className={classes.buttonContainer}>
          <Button variant="outlined" className={classes.button} href="https://github.com/shadeemerhi" target="_blank">
          <Typography className={classes.buttonText}>GitHub</Typography>
          <GitHubIcon style={{marginLeft: '0.5rem'}}/>
          </Button>
          <Button variant="outlined" className={classes.button} href="https://www.linkedin.com/in/shadee-m-a27134ba/" target="_blank">
          <Typography className={classes.buttonText}>LinkedIn</Typography>
          <LinkedInIcon style={{marginLeft: '0.5rem'}}/>
          </Button>
          <Button variant="outlined" className={classes.button} href="mailto: shadmerhi@gmail.com" target="_blank">
          <Typography className={classes.buttonText}>Email</Typography>
          <EmailIcon style={{marginLeft: '0.5rem'}}/>
          </Button>
        </div>
        <div className={classes.iconContainer}>
          <Link href="https://github.com/shadeemerhi" target="_blank" className={classes.icon}>
            <GitHubIcon/>
          </Link>
          <Link href="https://www.linkedin.com/in/shadee-m-a27134ba/" target="_blank" className={classes.icon}>
            <LinkedInIcon/>
          </Link>
          <Link href="mailto: shadmerhi@gmail.com" target="_blank" className={classes.icon}>
            <EmailIcon/>
          </Link>
        </div>
      </div>
    </div>
  )
}