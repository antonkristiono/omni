// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import { getSummary } from './services/summary'


const OutsideCard = styled.div`
// position: absolute;
width: 364px;
height: 392px;
left: 23px;
top: 383px;

background: #FFFFFF;
border-radius: 40px;
`

const ButtonGenerate = styled.button`
// position: absolute;
width: 162px;
height: 43px;
left: 49px;
top: 472px;

background: #8afd88;
border: 2px solid #A3A3A3;
box-sizing: border-box;
border-radius: 20px;
margin-top: 48px;
font-size: 20px;
font-family: ubuntu;
`

const PNormal = styled.p`
color: black;
font-size: 18px;
`

const Report=styled.button`
width: 162px;
height: 43px;
left: 49px;
top: 472px;

background: #d9e60e;
border: 2px solid #A3A3A3;
box-sizing: border-box;
border-radius: 2px;
font-size: 20px;
font-family: ubuntu;
margin-left:3px;
`

function App() {
  const [summary,setSummary] = useState([]);

  useEffect(() => {
    let mounted = true;
    getSummary()
      .then(x => {
        if(mounted){
          setSummary(x)
        }
      })
    return () => mounted = false;
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <OutsideCard>
          <ButtonGenerate>
            Generate
          </ButtonGenerate>
          {
            summary.map(count =>
              <>
              <PNormal key={count.link}>Link: {count.link}</PNormal>
              <Report>Report</Report>
              <PNormal key={count.AS}>alphabetical strings : {count.AS}</PNormal>
              <PNormal key={count.RN}>real number : {count.RN}</PNormal>
              <PNormal key={count.I}>integers : {count.I}</PNormal>
              <PNormal key={count.A}>alphanumerics : {count.A}</PNormal>
              </>
            )
          }
        </OutsideCard>
      </header>
    </div>
  );
}

export default App;
