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
         .then((user) => { 
            dispatch(
                {
                    type: 'SET_CURRENT_USER', 
                    user                    
                })
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
         .then((user) => { 
             
            dispatch(
                {
                    type: 'SET_CURRENT_USER', 
                    user                    
                })
         })
         .catch(error => console.log(error))
    }
}