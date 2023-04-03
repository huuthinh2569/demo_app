

const loginReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LOGIN': {
            return action;
        }
        default:
            return state;
    }
}
export default loginReducer