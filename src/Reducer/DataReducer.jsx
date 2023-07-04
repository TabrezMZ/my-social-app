export const initialData = {
    allUser: [],
    allPost: [],
    bookmarkPost: [],
    likePost: [],
}


export const DataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state,  allUser: action.payload  }
        case 'SET_POST':
            return { ...state,  allPost: action.payload  }
        default:
            return state;
    }
}