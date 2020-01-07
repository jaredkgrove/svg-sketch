import React, {useState} from 'react';
import styled from 'styled-components'

const Signup = () => {
//    const [currentUser, setCurrentUser] = useState(null);
   const [credentials, setCredentials] = useState({username:'', password:'', passwordConfirmation:''});

   const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`/api/v1/signup`,{
         headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
         method: 'POST',
         body: JSON.stringify({
            user: credentials
         })
      })
      .then((resp) => {
            
            // if(!resp.ok){throw Error(resp.statusText);}
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

   return(<SignupWrapper>
      <h1>Sign Up</h1>
      <SignupForm onSubmit={handleSubmit}>
         <input type="text" name="username" placeholder="Username" onChange={handleChange}/><br/>
         <input type="text" name="password" placeholdeR="Password" onChange={handleChange}/><br/>
         <input type="text" name="passwordConfirmation" placeholdeR="Confirm Password" onChange={handleChange}/><br/>
         <input type="submit" value="Sign Up"/>
      </SignupForm>
   </SignupWrapper>
   )
};
export default Signup

const SignupWrapper = styled.div`
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

const SignupForm = styled.form` 
display: inline-block;
    background: hsl(207, 80%, 10%);
    opacity: 1;
   padding: 10px;
   border-radius: 5px;
`;