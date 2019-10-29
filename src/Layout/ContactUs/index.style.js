import styled from 'styled-components';

export const Para = styled.h1`
`;

export const Contact = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin-top: 5%;
`;

export const InputBox = styled.textarea`
  width: 96%;
  height: 35px;
  border: 0.2rem solid #636363;
  background: #fff;
  padding: 2.7%;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 1rem;
  margin-bottom: 0%;
  margin-top: 8%;
`;

export const InputMsg = styled.textarea`
  width: 97%;
  height: 160px;
  border: 0.2rem solid #636363;
  background: #fff;
  padding: 3%;
  font-weight: bold;
  font-size: 1.5rem;
  box-sizing: border-box;
  resize: none;
  border-radius: 1rem;
  margin-top: 9%;
`;

export const Button = styled.button`
  background-color: var(--main-title-color);
  border: 1px solid #205c8b;
  color: white;
  border-radius: 20rem;
  width: 30%;
  height: 26px;
  margin-top: 12%;
  margin-left: 32%;
  font-size: 1.5rem;
@media (min-width: 768px) and (max-width: 1024px) {
  width: 27%;
  height: 33px;
  font-size: 2rem;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  width: 24%;
  height: 32px;
  font-size: 2rem;
}

@media (min-width: 1281px) {
  width: 25%;
  height: 34px;
  font-size: 2rem;
  }
`;
