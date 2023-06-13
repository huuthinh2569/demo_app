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
export const changePage = (data) => {
    return {
        type: "ChANGE_PAGE",
        payload: data,
    }
}
export const nextPage = (data) => {
    return {
        type: "NEXT_PAGE",
        payload: data,
    }
}
export const prevPage = (data) => {
    return {
        type: "PREVIOUS_PAGE",
        payload: data,
    }
}
export const setPageCount = (data) => {
    return {
        type: "SET_PAGE_COUNT",
        payload: data,
    }
}
export const getList = () => {
    return {
        type: "GET_LIST_USER",
    }
}
export const setList = (data) => {
    return {
        type: "SET_LIST_USER",
        payload: data,
    }
}
export const setSearchKey = (data) => {
    return {
        type: "SET_SEARCH_KEY",
        payload: data,
    }
}
export const setDefaultUser = (data) => {
    return {
        type: "SET_DEFAULT_USER",
        payload: data,
    }
}
export const setData = (data) => {
    return {
        type: "SET_DEFAULT_USER",
        payload: data,
    }
}

export const setCurrentPage = (data) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: data,
    }
}

export const setPage = (data) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: data,
    }
}

export const getLimitPage = (data) => {
    return {
        type: "SET_LIMIT_PAGE",
        payload: data,
    }
}

export const setLimit = (data) => {
    return {
        type: "SET_LIMIT_PAGE",
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