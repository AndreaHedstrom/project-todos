import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const HeaderText = styled.div`
font-size: 21px;
font-family: 'Quicksand', sans-serif;
color: rgb(69, 92, 107);
height: 100px;
margin-bottom: 10px;
`
const Weather = styled.div`
font-size: 18px;
font-famiy: 'Quicksand', sans-serif;
margin-bottom: 20px;
letter-spacing: 5px;
color: rgb(69, 92, 107);
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        <h1>Back & forth list</h1>
      </HeaderText>
      <Weather>
        It&apos;s
        <span className="material-symbols-outlined">
rainy
        </span> today.
      </Weather>
    </HeaderWrapper>
  )
}

export default Header;