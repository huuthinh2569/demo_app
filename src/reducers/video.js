
const initialState = {
    list: [],
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_VIDEO': {
            const newlist = [...state.list];
            newlist.push(action.payload);
            return {
                ...state,
                list: newlist,
            }
        }
        default:
            return state;
    }
}
export default videoReducer