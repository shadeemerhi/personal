import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';
import { links } from '../data/links'

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    height: '50px',
    justifyContent: 'space-around',
    border: '2px solid red',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100vh',
    }
  }
}));

export default function Nav() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      {links.map(link => {
        return (
          <NavItem
            key={link.id}
            {...link}
          />
        )
      })}
    </div>
  )
}