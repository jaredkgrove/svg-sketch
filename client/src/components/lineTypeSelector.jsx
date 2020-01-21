import React from 'react';
import styled from 'styled-components'

import circleImage from '../images/Circle.PNG'
import lineImage from '../images/Line.PNG'
import rectangleImage from '../images/Rectangle.PNG'
import polylineImage from '../images/Polyline.PNG'
 const LineTypeSelector = (props) => {

    const handleClick = (value) => {
        props.handleUpdate(value)
    }

    const isCurrentSetting = value => (value === props.lineType)

    return (
        <LineTypeWrapper>
            <LineTypeButton  selected={isCurrentSetting('Circle')} onClick={() => handleClick('Circle')} value='Circle' image={circleImage} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="hsl(207, 20%, 80%)" stroke="hsl(207, 20%, 25%)" stroke-width="10"/>
            </LineTypeButton>
            <LineTypeButton selected={isCurrentSetting('Line')} onClick={() => handleClick('Line')} value='Line' image={lineImage} viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="hsl(207, 20%, 25%)" stroke-width="10" />
            </LineTypeButton> 
            <LineTypeButton selected={isCurrentSetting('Rectangle')} onClick={() => handleClick('Rectangle')} value='Rectangle' image={rectangleImage} viewBox="0 0 100 100">
                <rect x="10" y="15" width="80" height="70" fill="hsl(207, 20%, 80%)" stroke="hsl(207, 20%, 25%)" stroke-width="10" />
            </LineTypeButton>
            <LineTypeButton selected={isCurrentSetting('Polyline')} onClick={() => handleClick('Polyline')} value='Polyline' image={polylineImage} viewBox="0 0 150 150">
            <polyline points="129 40, 128 40, 128 40, 124 40, 111 42, 101 46, 95 49, 91 53, 90 59, 89 62, 89 67, 89 71, 90 77, 91 85, 93 92, 95 100, 96 105, 96 112, 96 115, 96 117, 95 120, 93 121, 91 124, 84 128, 73 135, 63 140, 53 145, 49 146, 47 146, 46 146" stroke="hsl(0,100%,50%)" fill="transparent" stroke-width="4"></polyline>
            </LineTypeButton>
        </LineTypeWrapper>
    )
 }

 export default LineTypeSelector

 const LineTypeWrapper = styled.div`
    float: left;
    clear: both;
    width: 100%;
`;

const LineTypeButton = styled.svg`
    float: left;
    width: 23%;
    border: none;
    outline: none;
    margin: 1%; 
    background: white;
    opacity: ${props => props.selected ? 0.5:1};

`;
// background: url(${props => props.image});
// background-size: cover;
// background-repeat: no-repeat;
// 
// border: ${props => props.selected ? '2px solid blue': '2px solid'}


