 export const initialState = {
    AllUsers : [],
    AllPosts : [],
    BookMarkPosts : [],
    LikedPosts : [],
    FollowedUsers : [],
    FollowingUsers: [],
  }


  export const SocialReducer = (state, action) => {
    switch(action.type){
      case 'GET_ALL_USERS':
        return {...state }
        default: 
        return state
    }
  }
  
 