export const addUser = (data) => {
    return {
        type: "ADD_USER",
        payload: data,
    }
}
export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data,
    }
}
export const editUser = (data) => {
    return {
        type: "EDIT_USER",
        payload: data,
    }
}