import React, { useState } from 'react';
import {createSketch} from '../actions/createSketch'
import { connect } from 'react-redux';
import styled from 'styled-components'

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
        <FormWrapper onSubmit={handleSubmit}>
            <TextInput type="text" name="name" value={name} onChange={handleChange} placeholder="New Sketch Name" error={error}/>
            <SubmitInput type="submit" value='CREATE' />
        </FormWrapper>
    ) 
};

export default connect(null, { createSketch })(NewSketchInput)

const FormWrapper = styled.form`
    position: fixed;
    top: 0px;
    right: 0;
    height: 8vh;
    z-index:2;
`;

const SubmitInput = styled.input`
    height: 100%;
    width: 10vw;
    background: hsl(207, 80%, 50%);
    border: none;
    padding: 0;
    margin: 0;
    top:0;
    cursor: pointer;
    color: hsl(207, 10%, 90%);
`;

const TextInput = styled.input`
    border: ${props => props.error ? '2px solid red':'none'};
    box-sizing: border-box;
    font-size: 1em;
    padding: 0 0 0 1vh;
    line-height: 1em;
    height: 6vh;
    width: 20vw;
    margin: 0 1vh 0 0;
`;

