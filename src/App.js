import React from 'react';
import './App.css';
import styled from 'styled-components';
import wave from './svg/wave.svg';
import apple from './svg/fruit.svg';
import mango from './img/mango.png'
import sliced from './img/sliced.jpg'

const LogoStyle = styled.div`
  display: flex; flex-direction: row;
  width: fit-content;
  height: 2rem;
  margin-left: ${p => p.mleft ? p.mleft : '0rem'};
  margin-right: ${p => p.mright ? p.mright : '0rem'};

  img {
    margin-top: 0.5rem;
    height: 1.5rem;
  }
  h1 {
    position: relative;
    margin: 0; padding: 0; 
    line-height: 2.7rem;
    font-weight: 400;
    color: #86A939;
    z-index: 55;
    font-size: 1.5rem;
    margin-left: -0.1rem;

    span {
      color: white;
    }

    &:before {
      content: '';
      position: absolute;
      margin-top: 0.7rem;
      z-index: -1;
      height: 1.4rem;
      width: 2.1rem;
      margin-left: 0.1rem;
      background: rgb(255,206,38);
      background: linear-gradient(90deg, rgba(255,206,38,1) 0%, rgba(134,169,57,1) 100%);
    }
  }


  transform: scale(${p => p.scale ? p.scale : 1});
`;

const Logo = (p) => {
  return(
    <LogoStyle mleft={p.mleft} mright={p.mright} scale={p.scale}>
    <img src={apple}/>
    <h1><span>Not</span>AnApple</h1>
    </LogoStyle>
  )
}

const Wave = styled.img`
  position: relative;
  height: auto;
  width: 100%;
  margin-top: -99%;
  pointer-events: none;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Mango = styled.img`
  position: relative;
  height: 14rem;
  width: auto;
  margin: auto;
  pointer-events: none;
`;

const Header = styled.div`
  height: 40vh;
  width: 100%;
  display: flex; flex-direction: row; flex-wrap: wrap;
  background: linear-gradient(270.08deg, #FFCE26 0.02%, #FF2633 100.76%);
  padding-bottom: 5vh;
  user-select: none;
  padding-top: 3rem;

  .row {
    display: flex; flex-wrap: wrap;
    flex-direction: row;
  }

  .cta {
    margin: auto;
    width: 18rem;
    font-weight: 800;
    font-size: 2rem;
    color: #FFCE26;
    padding: 1rem;

    @media only screen and (max-width: 600px) {
      margin-bottom: 1rem;  
    }
  }

  .column {
    flex-direction: column;
  }

  .side {
    flex: 1 300px; 
    width: 100%;
    min-width: 20px;
    max-width: 500px;
    margin: auto;
    flex-direction: column;
    margin: 2rem auto 1rem;
  }

  .left {
    margin-right: 12rem;

    @media only screen and (max-width: 600px) {
      margin-right: auto;
    }
  }

  .right {
    margin-left: -14rem;

    @media only screen and (max-width: 600px) {
      margin-left: auto;
    }
  }

  button {
    position: absolute;
    width: 14rem;
    height: 5rem;
    border: none; 
    background-color: rgba(134, 169, 57, 0.8);
    color: white;
    font-size: 2rem;
    margin-top: -9rem;
    margin-left: -6.5rem;
    cursor: pointer;
    outline: none;
    pointer-events: auto;

    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
      background-color: rgba(134, 169, 57, 1);
      
    }
  }

  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  display: flex; flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3rem;
  color: white;
  user-select: none;
  margin-top: 0;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: auto;
    margin-left: 1.4rem; margin-right: 1.4rem
  }

  .side {
    height: 250px;
    width: 250px;
    margin: 2rem auto;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;

    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    opacity: 0;
    animation: fadein 3s forwards;
  }

  .one {
    background: #FFCE26;
  }

  .two {
    background: #86A939;

    img {
      width: 100%;
      height: 70%;
      margin: auto;
      pointer-events: none;
    }
  }

  .three {
    font-family: Parisienne;
    color: #86A939;
    background: #FFFFFF;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 15%; margin-right: 15%
  }

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }
`;

const Style = styled.div`

`;

function App() {
  return (
    <Style className="App">
      <Header className="App-header">
        <div className='side left'>
        <h1 className='cta'>Mangos that wont let you down</h1>
        <Logo mleft='auto' mright='auto' scale={2} width={'10rem'}/>
        </div>

        <div className='side right'>
          <div>
        <Mango src={mango}/>
        </div>
        <button>Order Today</button>
        </div>
      </Header>
      <Wave src={wave} />
      <Content>
        <div className='side one'>
          <h1>Organic, fresh, and not an apple.</h1>
        </div>
        <div className='side two'>
          <img src={sliced}></img>
        </div>
        <div className='side three'>
          <h1>Summertime, all the time.</h1>
        </div>
      </Content>
    </Style>
  );
}

export default App;
