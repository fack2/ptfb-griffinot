import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
overflow: scroll;
`;

export const Title = styled.h1`
margin-left: 3rem;
`;

export const Box = styled.div`
border: 0.1rem solid #2D2323;
display:flex;
flex-direction:column;
margin-top: 20rem;
margin-left: 4rem;
width: 88rem;
height: 100rem;
box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.25);
`;

export const KimImg = styled.img`
width: 30rem;
margin-left: 30rem;
margin-top: -15rem;
`;

export const Name = styled.h3`
font-size:3rem;
text-align: center;
margin-top: 6rem;
`;

export const Para = styled.p`
font-size: 3rem;
margin: 6rem 7rem 2rem 5rem;
line-height: 5.5rem;
color: #4F4F4F;
`;
