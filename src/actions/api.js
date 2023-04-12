export const getAPI = (data) => {
    return {
        type: 'GET_API',
        payload: data,
    }
}