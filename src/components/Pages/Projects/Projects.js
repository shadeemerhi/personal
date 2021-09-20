// React
import React, { useContext } from 'react';

// Contexts
import { DataContext } from '../../../contexts/DataContext';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Project from './Project';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '25px'
	}
}));

const Projects = () => {
	const classes = useStyles();
	const { projectState } = useContext(DataContext);

	return (
		<Grid container className={classes.root}>
			{projectState.projects.map(project => {
				return <Project project={project} key={project.id} />;
			})}
		</Grid>
	);
};

export default React.memo(Projects);
