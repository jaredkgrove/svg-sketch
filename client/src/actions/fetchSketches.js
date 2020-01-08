export function fetchSketches(){
    const token = localStorage.getItem('token')
    return (dispatch) => {
        return fetch(`/api/v1/sketches`, {
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
        .then((sketches) => {
            return dispatch({type: 'FETCH_SKETCHES', 
            payload: sketches['data'].map(sketch => ({id: sketch['id'], name: sketch['attributes']['name'], url: sketch['links']['sketch_url'], lastUpdated: sketch['attributes']['last_updated'], public: sketch['attributes']['public']}))
            })})
        .catch(error => console.log(error))
    }
}

