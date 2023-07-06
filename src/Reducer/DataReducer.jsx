export const initialData = {
    allUser: [],
    allPost: [],
    bookmarkPost: [],
    likePost: [],
}


export const DataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, allUser: action.payload }
        case 'SET_POSTS':
            return { ...state, allPost: action.payload }
        default:
            console.log(state);
            return state;
    }
}