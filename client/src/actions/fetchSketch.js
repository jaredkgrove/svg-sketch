export function fetchSketch(id){
    const token = localStorage.getItem('token')
    return (dispatch) => {
        dispatch({ type: 'LOADING_SKETCH' });
        fetch(`/api/v1/sketches/${id}`, {
            headers:{
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': token
            },
            method: 'GET',
         }
        )
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then((sketch) => {
            dispatch({type: 'FETCH_CURRENT_SKETCH', 
            payload: {
                id: sketch['data']['id'], 
                name: sketch['data']['attributes']['name'],
                created: sketch['data']['attributes']['created'],
                lastUpdated: sketch['data']['attributes']['last_updated'],
                public: sketch['data']['attributes']['public'],
                elements: sketch['included'].map((e) => ({type: e.attributes.elementable_type, properties: e.attributes.elementable}))
            }
            })})
        .catch(error => console.log(error))
    }
}
