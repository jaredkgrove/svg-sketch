import React, {useState} from 'react';
import styled from 'styled-components'

import LoginContainer from './LoginContainer'
import Signup from '../components/Signup'

import { NavLink } from 'react-router-dom';

const HeaderContainer = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const handleLoginClick = () => {
        setShowSignup(false)
        setShowLogin(!showLogin)
    }
    const handleSignupClick = () => {
        setShowSignup(!showSignup)
        setShowLogin(false)
    }

    const renderForm = () =>{
        if(showLogin){
           return <LoginContainer/>
        }else if(showSignup){
            return <Signup/>
        }
    }
    return(
        <HeaderWrapper>
            <HeaderItem><NavLink to="/">Home</NavLink></HeaderItem>
            <HeaderItem><LoginButton onClick={handleLoginClick}>Login</LoginButton></HeaderItem>
            <HeaderItem><LoginButton onClick={handleSignupClick}>Signup</LoginButton></HeaderItem>

            {renderForm()}
            {/* <NavLink className='App-link' style={{ marginRight: '10px' }} to="/sketches">Sketches</NavLink> */}
        </HeaderWrapper>
    )
}

export default HeaderContainer

const HeaderWrapper = styled.ul`
    list-style-type: none;  
    position: fixed;
    width: 100vw; 
    height: 8vh; 
    top: 0px;
    z-index:1;
    background-color: #282c34;
    line-height: 8vh;
    font-size: calc(10px + 2vmin);
    margin: 0px 0px 1vh 0px;
    padding: 0px;
`;

const HeaderItem = styled.li`
    float: left
    margin-right: 10px;
    cursor: pointer;
    >*{
        color: hsl(207, 80%, 50%);
        border: 0px;
        background: none;
        margin: 0px;
        padding: 0px;
        outline:none;
        :hover{
            text-decoration: none;
            color: hsl(207, 10%, 90%);
        }
    }
`;

const LoginButton = styled.button`
    font-size: inherit;
`;
