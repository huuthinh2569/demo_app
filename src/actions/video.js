export const getvideoLIST = (data) => {
    return {
        type: 'GET_VIDEO_LIST',
        payload: data,
    }
}
export const getvideoID = (id) => {
    return {
        type: 'GET_VIDEO_ID',
        payload: id,
    }
}
export const getvideoDesc = (desc) => {
    return {
        type: 'GET_VIDEO_DESC',
        payload: desc,
    }
}