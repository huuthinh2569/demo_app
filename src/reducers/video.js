const inittialState = {
    list: [],
    id: '',
    desc: '',
}


const videoReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'GET_VIDEO_LIST': {
            return action.data;
        }
        case 'GET_VIDEO_ID': {
            return action.data;
        }
        case 'GET_VIDEO_DESC': {
            return action.data;
        }
        default:
            return state;
    }
}
export default videoReducer