import React from 'react';
import { NavLink } from 'react-router-dom';
const HeaderContainer = () => {
    return(
        <header className="App-header">
            <NavLink className='App-link' style={{ marginRight: '10px' }} to="/">Home</NavLink>
            <NavLink className='App-link' style={{ marginRight: '10px' }} to="/sketches">Sketches</NavLink>
        </header>
    )
}

export default HeaderContainer