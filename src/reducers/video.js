const inittialState = {
    list: [],
    id: "",
    desc: "",
}


const videoReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'SET_VIDEO_LIST': {
            return {
                ...state,
                list: action.payload
            };
        }
        case 'SET_VIDEO_ID': {
            return {
                ...state,
                id: action.payload
            };
        }
        case 'SET_VIDEO_DESC': {
            return {
                ...state,
                desc: action.payload
            };
        }
        default:
            return state;
    }
}
export default videoReducer