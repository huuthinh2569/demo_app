const inittialState = {
    list: [],
}


const videoReducer = (state = inittialState, action) => {
    switch (action.type) {
        case 'GET_VIDEO_list': {
            const newlist = state.list;
            action.push(newlist);
            return {
                ...state,
                newlist
            }
        }
        default:
            return state;
    }
}
export default videoReducer