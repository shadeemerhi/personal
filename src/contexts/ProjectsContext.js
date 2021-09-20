// React
import React, { useReducer, useEffect } from 'react';

// Reducers
import projectsReducer from '../reducers/projectsReducer';
import workItemsReducer from '../reducers/workItemsReducer';

// Static
import { DEFAULT_PROJECT } from '../data/default_objects';

export const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
	// Initial state objects
	const initProjectState = {
		projects: [],
		latestProject: DEFAULT_PROJECT,
		loading: false,
		error: null
	};
	const initWorkItemState = {
		workItems: [],
		loading: false,
		error: null
	};
	const initEducationItems = {};
	const initSkills = {};
	const initMiscellaneous = {};

	// Initialize state and reducers
	const [projectState, dispatchProjects] = useReducer(projectsReducer, initProjectState);
	const [workItemState, dispatchWorkItems] = useReducer(workItemsReducer, initWorkItemState);

	// Initial API calls
	useEffect(() => {
		const fetchData = async () => {
			try {
				const projectAPIData = await fetch('/lol');
				const { projects } = await projectAPIData.json();
				dispatchProjects({ type: 'SET_PROJECTS', projects });
			} catch (error) {
				console.log(error);
				dispatchProjects({ type: 'PROJECTS_ERROR', error: error.message });
			}
		};
		fetchData();
	}, []);

	const value = {
		projectState
	};

	return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};
