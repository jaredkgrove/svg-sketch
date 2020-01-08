export const signup = (credentials) => {
    return (dispatch) => {
        fetch(`/api/v1/signup`,{
            headers:{
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
            method: 'POST',
            body: JSON.stringify({
                user: credentials
            })
         })
         .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
         })
         .then((json) => { 
            localStorage.setItem('token', json.jwt)
            dispatch(setCurrentUser(JSON.parse(json.user).data.attributes))
         })
         .catch(error => console.log(error))
    }
}

export const login = (credentials) => {
    return (dispatch) => {
        fetch(`/api/v1/login`,{
            headers:{
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
            method: 'POST',
            body: JSON.stringify(credentials)
         })
         .then((resp) => {
               if(!resp.ok){throw Error(resp.statusText);}
               return resp.json()
         })
         .then((json) => { 
            localStorage.setItem('token', json.jwt)
            dispatch(setCurrentUser(JSON.parse(json.user).data.attributes))
         })
         .catch(error => console.log(error))
    }
}

export const getCurrentUser = (token) => {
    return (dispatch) => {
        fetch(`/api/v1/get_current_user`,{
            headers:{
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': token
            },
            method: 'GET',
         })
         .then((resp) => {
           
               if(!resp.ok){throw Error(resp.statusText);}
               return resp.json()
         })
         .then((json) => { 
             
            if(json.errors){
                dispatch(clearCurrentUser())
            }else{
                dispatch(setCurrentUser(json.data.attributes))
            }
         })
         .catch(error => console.log(error))
    }
}

export const logout = () =>{
    return (dispatch) => {
        localStorage.removeItem("token")
        dispatch(clearCurrentUser())
    }   
}

export const clearCurrentUser = () => {
    return {
        type:'CLEAR_CURRENT_USER'
    }
}

export const setCurrentUser = (userData) => {
    return {
        type: 'SET_CURRENT_USER', 
        payload: userData
    }                     
}