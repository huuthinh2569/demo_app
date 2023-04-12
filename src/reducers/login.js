const inittialState = {
    list: [],
}

const loginReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            const newlist = { ...state.list }
            return {
                ...state,
                newlist,
            };
        default:
            return state;
    }
}
export default loginReducer