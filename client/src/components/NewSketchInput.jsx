import React, { useState } from 'react';
import {createSketch} from '../actions/createSketch'
import { connect } from 'react-redux';

const NewSketchInput = (props) => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        if(name){

            props.createSketch({name: name}).then(error => error ? setError(true):setError(false))
        }else{
            setError(true)
        }
   
    }

    const handleChange = (event) => {
        setName( event.target.value )
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={handleChange} placeholder="New Sketch Name" style={{border: `${error ? '2px solid red':'none'}`}}/>
            <input type="submit" value='CREATE' />
        </form> 
    ) 
};

export default connect(null, { createSketch })(NewSketchInput)