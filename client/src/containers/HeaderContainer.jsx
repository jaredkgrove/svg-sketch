import React from 'react';
import styled from 'styled-components'

import { NavLink } from 'react-router-dom';

const HeaderContainer = () => {
    return(
        <HeaderWrapper>
            <NavLink className='App-link' style={{ marginRight: '10px' }} to="/">Home</NavLink>
            {/* <NavLink className='App-link' style={{ marginRight: '10px' }} to="/sketches">Sketches</NavLink> */}
        </HeaderWrapper>
    )
}

export default HeaderContainer

const HeaderWrapper = styled.header`
    position: absolute;
    width: 100vw; 
    height: 8vh; 
    z-index:1;
    background-color: #282c34;
    line-height: 8vh;
    font-size: calc(10px + 2vmin);
    margin-bottom: 1vh;
`;

