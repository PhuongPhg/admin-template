import React, {Component, useState} from 'react';
import styled from 'styled-components';
const Styles = styled.div`
  .left-half, .right-half{
    display: inline-block;
    width: 47%;
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 200px
  };
  div{
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
    margin-left: 15px;
  };
  p{
    font-size: 20px;
  }`;
export default function Dashboard(){
  const [content, setContent] = useState("");
  return(
    <div style={{marginLeft: 140, borderRadius: 20, marginRight: 75, }}>
    <Styles>
      <div className="left-half">
        <p>Left now</p>
      </div>
      <div className="right-half">
        <p>right now</p>
      </div>
      <div style={{width: '97%'}}>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
      </div>
    </Styles>
    </div>
    
  )
}