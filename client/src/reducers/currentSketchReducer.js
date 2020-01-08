const currentSketchReducer = (state = {id:'', name: '', elements: [], created:'', lastUpdated:'', loading: false, saving: false}, action) => {
  switch(action.type) {
      case 'LOADING_SKETCH':
          return {...state, loading: true}
      case 'SAVING_SKETCH':
          return {...state, saving: true}

      case 'CREATE_SKETCH':
      case 'FETCH_CURRENT_SKETCH':
      case 'CLEAR_CURRENT_SKETCH':
      case 'UPDATE_CURRENT_SKETCH':
          return {...state, id: action.payload.id, name: action.payload.name, elements: action.payload.elements, created:action.payload.created, lastUpdated:action.payload.lastUpdated, public: action.payload.public, loading: false, saving: false}   
      default:
        return state;
    }
  }
   
  export default currentSketchReducer;