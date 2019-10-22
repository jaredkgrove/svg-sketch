import React from 'react';
import { NavLink } from 'react-router-dom';
class HeaderContainer extends React.Component{


render() {

    return(
        <header className="App-header">

        <NavLink 
        className='App-link'
        style={{ marginRight: '10px' }} 
        to="/"
        >
        Home
        </NavLink>
        <NavLink 
        className='App-link'
            style={{ marginRight: '10px' }} 
            to="/sketches"
        >
        New Sketch
        </NavLink>


        {/* {routerProps => <Sketch {...routerProps} sketch={this.state.sketch}/>} */}
        </header>
    )}
}

export default HeaderContainer