import React, {useState} from 'react';
import styled from 'styled-components'

const Login = () => {
   // const [currentUser, setCurrentUser] = useState(null);
   const [credentials, setCredentials] = useState({email:'', password:''});

   const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`/api/v1/login`,{
         method: 'POST',
      })
      .then((resp) => {
            
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.json()
      })
      .then((json) => { 
         console.log(json)
      })
      .catch(error => console.log(error))
   }

   const handleChange = (e) => {
      const {name, value} = e.target
      setCredentials({...credentials, [name]:value})
   }

   return(<LoginWrapper>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
         <input type="text" name="email" placeholder="email" onChange={handleChange}/><br/>
         <input type="text" name="password" placeholdeR="password" onChange={handleChange}/><br/>
         <input type="submit" value="Login"/>
      </LoginForm>
   </LoginWrapper>
   )
};
export default Login

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