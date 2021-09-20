const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS': {
            return {
                ...state,
                projects: action.projects,
                latestProject: action.projects.find(project => project.latest)
            };
        }
        case 'PROJECTS_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default projectsReducer;