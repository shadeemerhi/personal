import React, { useReducer, useEffect } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
	// Initial state objects
	const initProjectState = {
		projects: [],
		loading: false,
		error: null
	};
	const initWorkItems = {};
	const initEducationItems = {};
	const initSkills = {};
	const initMiscellaneous = {};

	const projectsReducer = (state, action) => {
		switch (action.type) {
			case 'SET_PROJECTS': {
				return {
					...state,
					projects: action.projects
				};
			}
			default:
				return state;
		}
	};

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
				console.log('FETCH PROJECTS ERROR');
			}
		};
		fetchData();
	}, []);

	const value = {
		projectState
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
