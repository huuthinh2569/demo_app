const inittialState = {
    username: '',
    password: '',
}

const loginReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            return state;
        default:
            return state;
    }
}
export default loginReducer