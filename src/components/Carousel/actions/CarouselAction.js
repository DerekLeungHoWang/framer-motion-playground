


export const retrieveCursor = (payload) => {
    return {
        type: 'CHANGE_CURSOR',
        payload
    }
}

export const retrieveEnlarge = (payload) => {
    return {
        type: 'CHANGE_ENLARGE',
        payload
    }
}