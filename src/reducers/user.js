const inittialState = {
    user: [],
    usersSearch: [],
}

const userReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_SEARCH_USER':
            return {
                ...state,
                usersSearch: action.payload,
            };
        default:
            return state;
    }
}
export default userReducer