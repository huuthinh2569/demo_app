const inittialState = {
    list: [],
}

const apiReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'SET_API':
            return state;
        default:
            return state;
    }
}
export default apiReducer