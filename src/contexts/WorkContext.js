// React
import React, { useReducer, useEffect } from 'react';

// Reducer
import workItemsReducer from '../reducers/workItemsReducer';

export const WorkContext = React.createContext();

export const WorkProvider = ({ children }) => {
	// Initial state objects
	const initWorkItemState = {
		workItems: [],
		loading: false,
		error: null
	};

	// Initialize state and reducers
	const [workItemState, dispatchWorkItems] = useReducer(workItemsReducer, initWorkItemState);

	// Initial API calls
	useEffect(() => {
		const fetchData = async () => {
			try {
                const workItemAPIData = await fetch('/api/work-items');
				const { workItems } = await workItemAPIData.json();
                dispatchWorkItems({ type: 'SET_WORKITEMS', workItems });
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const value = {
		workItemState
	};

	return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
};
