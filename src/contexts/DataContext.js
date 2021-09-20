// React
import React, { useReducer, useEffect } from 'react';

// Reducer
import projectsReducer from '../reducers/projectsReducer';

// Static
import { DEFAULT_PROJECT } from '../data/default_objects';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
	// Initial state objects
	const initProjectState = {
		...DEFAULT_PROJECT,
		loading: false,
		error: null
	};
	const initWorkItems = {};
	const initEducationItems = {};
	const initSkills = {};
	const initMiscellaneous = {};

	const workItemsReducer = (state, action) => {};

	// Initialize state and reducers
	const [projectState, dispatchProjects] = useReducer(projectsReducer, initProjectState);
	const [workItems, dispatchWorkItems] = useReducer(workItemsReducer, initWorkItems);

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

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
