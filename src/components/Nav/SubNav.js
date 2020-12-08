import { makeStyles } from '@material-ui/core/styles';
import SubNavItem from './SubNavItem';

const useStyles = makeStyles((theme) => ({

  linkContainer: {
    display: 'flex'
  }
}));

export default function SubNav(props) {

  const classes = useStyles();

  return(
    <div className={classes.linkContainer}>
      {props.links.map(link => {
        return(
          <SubNavItem
            key={link.id}
            {...link}
            setSubNavItem={props.setSubNavItem}
            selected={props.subNavItem === link.name}
          />
        )
      })}
    </div>
  )
}