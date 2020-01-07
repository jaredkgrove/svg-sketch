const currentUserReducer = (state = null, action) => {

    switch(action.type) {
      case 'SET_CURRENT_USER':
        window.localStorage.setItem('token', action.user.jwt)
        return action.user
    
      default:
        return state;
    }
  }
   
  export default currentUserReducer;