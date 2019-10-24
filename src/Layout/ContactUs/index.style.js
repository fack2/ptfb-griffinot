import styled from 'styled-components';

export const Para = styled.h1`
 margin-left: 6rem;
`;

export const Contact = styled.form`
  margin-top: 10rem;
  margin-left: 2rem;
  display: flex;
  flex-flow: column wrap;
`;

export const InputBox = styled.textarea`
  width: 80rem;
  height: 4rem;
  border: 0.2rem solid #636363;
  background: #fff;
  margin: 0rem 3rem 5rem;
  padding: 3rem;
  font-size: 3.5rem;
  border-radius: 2rem;
`;

export const InputMsg = styled.textarea`
  width: 86rem;
  height: 55rem
  border: 0.2rem solid #636363;
  background: #fff;
  margin: 0rem 3rem 5rem;
  padding: 3rem;
  font-size: 3.5rem;
  box-sizing: border-box;
  resize: none;
  border-radius: 2rem;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  background-color: var(--main-title-color);
  border: 1px solid #205c8b;
  color: white;
  border-radius: 20rem;
  width: 30rem;
  height: 9rem;
  margin-top: 5rem;
  font-size: 3.8rem;
`;
