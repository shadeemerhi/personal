import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  description: {
    fontWeight: '500',
    marginBottom: '1.5rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '10pt'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '10pt'
      },
    [theme.breakpoints.down('sm')]: {
      margin: '1.5rem 0rem 1.5rem 0rem',
      fontSize: '10pt'
    }
  },
}));


export default function ProjectInfo(props) {

  const classes = useStyles();

  return (
    <Typography className={classes.description}>{props.description}</Typography>
  )

}