


const videoReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_VIDEO': {
            return action;
        }
        case 'GET_VIDEO_ID': {
            return action;
        }
        default:
            return state;
    }
}
export default videoReducer