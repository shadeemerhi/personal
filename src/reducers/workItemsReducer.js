const workItemsReducer = (state, action) => {
	switch (action.type) {
        case 'SET_WORKITEMS':
            return {
                ...state,
                workItems: action.workItems,
            }
		default:
			return state;
	}
};


export default workItemsReducer;