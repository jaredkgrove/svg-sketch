import React from 'react';

import HueSelector from '../components/HueSelector'
import SaturationLightnessSelector from '../components/SaturationLightnessSelector'
import styled from 'styled-components'

const ColorSelectorContainer = (props) => {


    return(
        <ColorSelectorWrapper>
            <div>{props.text}</div>
            <SaturationLightnessSelector initColor={props.color} handleChange={props.handleUpdate}/>
            {/* <div className='hue-select'> */}
                <HueSelector handleChange={props.handleUpdate} initHue={props.color.h}/>
            {/* </div> */}
        </ColorSelectorWrapper>
    )
}


export default ColorSelectorContainer

const ColorSelectorWrapper = styled.div`
    box-sizing: border-box ;
    float: left;
    padding: 0px 0.5vw 0px 0.5vw;
    margin: 0 0 1vw 1vw;
    border-radius: 10px;
    width: 14%;
    background:  hsl(207, 25%, 20%);
    clear: none;
`;