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
export const deleteUser = (data) => {
    return {
        type: "DELETE_USER",
        payload: data,
    }
}
export const findUser = (data) => {
    return {
        type: "SEARCH_USER",
        payload: data,
    }
}
export const setfindUser = (data) => {
    return {
        type: "SET_SEARCH_USER",
        payload: data,
    }
}
export const findDate = (data) => {
    return {
        type: "SEARCH_DATE",
        payload: data,
    }
}
export const changeStatus = (data) => {
    return {
        type: "CHANGE_STATUS",
        payload: data,
    }
}
export const findStatus = (data) => {
    return {
        type: "SEARCH_STATUS",
        payload: data,
    }
}