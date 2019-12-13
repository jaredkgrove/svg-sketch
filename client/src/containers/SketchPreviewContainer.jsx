import React from 'react';
import styled from 'styled-components'

import ElementsContainer from './ElementsContainer'

    const SketchPreviewContainer = (props) => (
            <SketchShowWrapper viewBox = {`0 0 1000 500`} className={"sketch-board preview"} >
                <ElementsContainer elements={props.elements} />
            </SketchShowWrapper>
    )

export default SketchPreviewContainer

const SketchShowWrapper = styled.svg`
    box-sizing: border-box;
    clear: none;
    text-align: center;
    float: right;
    width: 74vw;
    margin: 0.75vw 0.75vw 0px 0px;
    box-sizing: border-box ;
    border-radius: 10px;
    background: hsl(207, 5%, 90%);
`;
