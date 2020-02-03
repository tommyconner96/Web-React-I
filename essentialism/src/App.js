import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import styled from 'styled-components'

const AppContainer=styled.div`
background-color: #eae7dc;
padding: 3em;
margin: 0 auto;
margin-top: 3em;
margin-left: 1em;
margin-right: 1em;
margin-bottom: 3em;
display: flex;
flex-direction: column;
text-align: center;
border-radius: 2em;
`

const Para = styled.div`
font-size: 1.5em;
margin-left: 2em;
margin-right: 2em;
`

const HeaderStyle = styled.header`
background-color: #e98074;
padding-bottom: 2em;
border-radius: 2em;

`

function App() {
return( 
<AppContainer>
    <HeaderStyle>
      <h1>
        Essentialism App
        </h1>
      <Para>
      Enter Essentialism. The Way of the Essentialist involves doing less, 
      but better, so you can make the highest possible contribution. 
      It’s not about getting more done in less time or getting less done. 
      It’s about getting only the right things done.
      </Para>
    </HeaderStyle>      
  <div>
    <LoginForm />
  </div>
</AppContainer>
)   
}

export default App;
