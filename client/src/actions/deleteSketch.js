
export const deleteSketch = (id) => {
    const token = localStorage.getItem('token')
    return (dispatch) => {
        fetch(`/api/v1/sketches/${id}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
             },
            method: 'DELETE',
        })
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then((sketch) => { 

            dispatch(
            {
                type: 'DELETE_SKETCH', 
                payload: sketch
            })
        })
        .catch(error => console.log(error))
    
    }
}

