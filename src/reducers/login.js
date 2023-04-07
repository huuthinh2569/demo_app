const inittialState = {
    list: [],
}

const loginReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            return action.payload;
        default:
            return state;
    }
}
export default loginReducer