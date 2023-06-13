const inittialState = {
    user: [],
    rawUser: {},
    limit: 6,
    currentPage: 1,
    pageCount: 1,
    searchKey: "",
}

const userReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEY':
            console.log("reducer: ", action.payload);
            return {
                ...state,
                searchKey: action.payload,
            };
        case 'SET_USER':
            return {
                ...state,
                rawUser: action.payload,
            };
        case 'SET_LIST_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        case 'SET_LIMIT_PAGE':
            return {
                ...state,
                limit: action.payload,
            };
        case 'SET_PAGE_COUNT':
            console.log("reducers: ", action.payload);
            return {
                ...state,
                pageCount: action.payload,
            }
        case 'SET_SEARCH_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_DEFAULT_USER':
            return {
                ...state,
                rawUser: action.payload,
            };
        default:
            return state;
    }
}
export default userReducer