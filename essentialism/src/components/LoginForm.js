import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const LoginStyle = styled.div`
// border: 2px dashed #e98074;
border-radius: 1.5em;
background-color: #e85a4f;
padding: 1em;
width: 300px;
margin: 0 auto;
margin-top: 2em;
color: #eae7dc;
@media (max-width: 500px) {
  width:85%;
  margin: 0 auto;
}
`

const BtnStyle = styled.button`
color: #8e8d8a;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #8e8d8a;
border-radius: 1em;
  :active {
    color:#e98074;
    // background-color: #e98074;

  }
`

function LoginForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  }
   
  return (
    // <div className='login-form'>
    <LoginStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <br />
          <input 
            name="userName" 
            ref={register({ required: true, })} 
            placeholder='Username' 
            type='text'
            />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input 
            name="passWord" 
            ref={register({ required: true, })} 
            placeholder='Password' 
            type='password'/>
            <br />
            <BtnStyle type="submit">Login</BtnStyle>
        </label>
      </form>
    </LoginStyle>

  );
}

export default LoginForm;