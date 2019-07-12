import React from 'react';
import styled from 'styled-components';

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
`;

export const RightContainer = styled.div`
  flex: 1;
`;

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 1rem;
`;

export const SignForm = styled.div`
  form {
    width: 80%;
    padding-bottom: 3rem;

    label {
      font-size: 0.9rem;
      line-height: 2rem;
      font-weight: 500;
    }

    input {
      margin-bottom: 1.3rem;
      width: 100%;
      border-radius: 2px;
      background: #181818;
      border: 1px solid #555;
      color: #ccc;
      padding: 0.5rem 1rem;
      line-height: 1.3rem;
    }

    button {
      width: 100%;
    }
  }
`;

export const PrimaryBtn = styled.button`
  padding: 0.7rem 1rem;
  height: 2.7rem;
  display: block;
  border: 0;
  border-radius: 2px;
  font-weight: 500;
  background: #f96816;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;

  :hover {
    background-color: #ff7b39;
  }
`;

export const ShowCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://image.ibb.co/cO9Lxq/login-bg.jpg') no-repeat center
    center / cover;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
  text-align: center;

  h1 {
    font-size: 3rem;
    width: 100%;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  a {
    padding: 0.7rem 1rem;
    height: 2.7rem;
    display: block;
    border: 1px solid #f4f4f4;
    border-radius: 2px;
    font-weight: 500;
    background: none;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.5s;

    :hover {
      border-color: #ff7b39;
      color: #ff7b39;
    }
  }
`;

export const MainFooter = styled.footer`
  color: #ccc;
  text-align: center;
  font-size: 0.8rem;
  max-width: 80%;
  padding-top: 5rem;

  a {
    color: #f96816;
    text-decoration: underline;
  }
`;

export const Or = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;
  align-items: center;

  hr {
    flex: auto;
    border: none;
    height: 1px;
    background: #aaa;
  }

  span {
    color: #ccc;
    padding: 0 0.8rem;
  }
`;
