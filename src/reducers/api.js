

const apiReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_API':
            return action;
        default:
            return state;
    }
}
export default apiReducer