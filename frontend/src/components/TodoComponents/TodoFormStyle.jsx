import React from 'react';
import styled from 'styled-components';

export const TodoFormStyle = styled.div`
 
  justify-content:flex-end;
  width: 100%;
  background: #fff;
  max-width:400px;
  box-sizing:border-box;
  padding: 2rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  @media(max-width:500px){
    display:flex;
    flex-direction:column;
    padding:2rem;
    width:80%;
    align-self: auto; 
  }


  h2 {
    margin: 0 0 40px;
    padding: 0;
    color: #f96816;
    text-transform: uppercase;
  }

  input {
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: none;
    border-bottom: 2px solid #999;
  }

  select {
    height: 50px;
    padding: 10px;
    margin-bottom: 40px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    border: none;
  }

  form {
    label {
      color: #999;
      transition: 0.5s;
      pointer-events: none;
    }
  }
`;
