import React from 'react';
import styled from 'styled-components'

import circleImage from '../images/Circle.PNG'
import lineImage from '../images/Line.PNG'
import rectangleImage from '../images/Rectangle.PNG'
import polylineImage from '../images/Polyline.PNG'
 const LineTypeSelector = (props) => {

    const handleClick = (e) => {
        props.handleUpdate(e.target.value)
    }

    const isCurrentSetting = value => (value === props.lineType)

    return (
        <LineTypeWrapper>
            <LineTypeButton selected={isCurrentSetting('Circle')} onClick={handleClick} value='Circle' image={circleImage} />
            <LineTypeButton selected={isCurrentSetting('Line')} onClick={handleClick} value='Line' image={lineImage}/> 
            <LineTypeButton selected={isCurrentSetting('Rectangle')} onClick={handleClick} value='Rectangle' image={rectangleImage}/>
            <LineTypeButton selected={isCurrentSetting('Polyline')} onClick={handleClick} value='Polyline' image={polylineImage}/>
        </LineTypeWrapper>
    )
 }

 export default LineTypeSelector

 const LineTypeWrapper = styled.div`
    float: left;
    clear: both;
    width: 100%;
`;

const LineTypeButton = styled.button`
    float: left;
    width: 23%;
    padding: 21% 0px 0px 0px;
    margin: 1%; 
    background: url(${props => props.image});
    background-size: cover;
    border: ${props => props.selected ? '2px solid blue': '2px solid'}
`;



  
