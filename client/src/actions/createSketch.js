export const createSketch = (data) => {
    const token = localStorage.getItem('token')
    return (dispatch) => {
        dispatch({ type: 'SAVING_SKETCH' });
        return fetch(`/api/v1/sketches`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((resp) => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
        })
        .then((sketch) => { 
            dispatch(
            {
                type: 'CREATE_SKETCH', 
                payload: {
                    id: sketch['data']['id'], 
                    name: sketch['data']['attributes']['name'],
                    created: sketch['data']['attributes']['created'],
                    lastUpdated: sketch['data']['attributes']['last_updated'],
                    public: sketch['data']['attributes']['public'],
                    elements: sketch['included'].map((e) => ({type: e.attributes.elementable_type, properties: e.attributes.elementable}))
                }
            })
        })
        .catch(error => error)
    
    }
}

