// React
import { useContext } from 'react';

// Context
import { DataContext } from '../../../../contexts/DataContext';

// Custom components
import Project from '../../Projects/Project';

// Material UI
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
	title: {
		fontSize: '14pt',
		fontWeight: '900',
		margin: '1rem 0rem 1rem 0rem'
	},

	text: {
		margin: '1rem 0rem 1rem 0rem'
	}
}));

export default function About(props) {
	const classes = useStyles();

	const { projectState } = useContext(DataContext);

	useEffect(() => {}, []);
	return (
		<div>
			<Typography className={classes.text}>{props.textInspo}</Typography>
			<br />
			<Typography className={classes.title}>Mini Bio</Typography>
			<Typography className={classes.text}>{props.textMain}</Typography>
			<Typography className={classes.text}>{props.textSubMain}</Typography>
			<br />
			<Typography>{props.textSub}</Typography>
			<br />
			<Typography className={classes.title}>Latest Release</Typography>
			<Project project={projectState.latestProject} />
		</div>
	);
}
