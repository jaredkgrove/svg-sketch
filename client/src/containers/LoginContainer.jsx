import React, {useState} from 'react';
import styled from 'styled-components'
import {login} from '../actions/currentUser'
import { connect } from 'react-redux';

const LoginContainer = ({ login }) => {
   // const [currentUser, setCurrentUser] = useState(null);
   const [credentials, setCredentials] = useState({username:'', password:''});

   const handleSubmit = (e) => {
      e.preventDefault()
      login(credentials)
   }

   const handleChange = (e) => {
      const {name, value} = e.target
      setCredentials({...credentials, [name]:value})
   }

   return(<LoginWrapper>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
         <input type="text" name="username" placeholder="Username" onChange={handleChange}/><br/>
         <input type="text" name="password" placeholdeR="Password" onChange={handleChange}/><br/>
         <input type="submit" value="Login"/>
      </LoginForm>
   </LoginWrapper>
   )
};
export default connect(null, { login })(LoginContainer)

const LoginWrapper = styled.div`
   position: absolute
    height: 92vh;
    width: 100vw;    
    background: hsl(207, 80%, 10%, 50%);
    border: none;
    padding: 0;
    margin: 0;
    top:8vh;
   text-align: center;
    color: hsl(207, 10%, 90%);
`;

const LoginForm = styled.form` 
   display: inline-block;
    background: hsl(207, 80%, 10%);
    opacity: 1;
   padding: 10px;
   border-radius: 5px;
`;