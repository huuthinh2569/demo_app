const inittialState = {
    user: [],
    rawUser: [],
    limit: 6,
    currenPage: 1,
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
        case 'SET_DEFAULT_USER':
            return {
                ...state,
                user: action.payload.list,
                rawUser: action.payload,
                limit: action.payload.limit,
            };
        default:
            return state;
    }
}
export default userReducer