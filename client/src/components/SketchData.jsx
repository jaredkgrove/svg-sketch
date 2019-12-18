import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SketchData = ({sketch, handleDelete}) => (
    <SketchDataWrapper>
        <h1>{sketch.name}</h1>
        <h6>Created: {sketch.created}</h6>
        <h6>Updated: {sketch.lastUpdated}</h6>
        <Link to={`/sketches/${sketch.id}/edit`}>EDIT</Link>
        <Button onClick={handleDelete}>DELETE</Button>
    </SketchDataWrapper>
);

 export default SketchData

 const SketchDataWrapper = styled.div`
    box-sizing: border-box ;
    padding: 1vw 0.5vw 1vw 0.5vw;
    margin: 0.75vw 0.75vw 0px 0.75vw;
    border-radius: 10px;
    width: 23vw;
    background:  hsl(207, 25%, 20%);
    float: left;
    clear: none;
    > h1{
        color:  hsl(207, 80%, 50%);
        font-size: 3vh;
        padding: 0px;
        clear: both;
    }
    > h6{
        margin: 0px;
        padding: 0px 0 10px 0;
        clear: both;
    }
    > a{
        display: inline-block;
        height: 8vh;
        width: 10vw;
        line-height: 8vh;
        background: hsl(207, 80%, 50%);
        :hover{
            color: hsl(207, 10%, 90%);
        }
    }
`;

const Button = styled.button`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    padding: 0;
    color: hsl(207, 10%, 90%);
    border: none;
    display: inline-block;
    height: 8vh;
    width: 10vw;
    line-height: 8vh;
    margin-top: 10px;
    background: hsl(15, 80%, 50%);
    cursor: pointer;
`;

