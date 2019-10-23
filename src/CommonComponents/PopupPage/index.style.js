import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BodyPage = styled.div`
  background: #cfcfcf;
  justify-content: center;
`;

export const PopUPCard = styled.div`
  text-align: center;
  display: flex;
  height: 0.6rem;
`;

export const PopUpBox = styled.div`
  width: ${(props) => props.Width || '82rem'};
  height: ${(props) => props.Height || '100rem'};
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -17.4rem;
  margin-top: -38rem;`;

export const Logo = styled.div`
  width: 82.5rem;
  height: 34rem;
  background: ${(props) => props.Background || '#205c8b'};
  margin-top: -1rem;
  margin-left: -0.4rem;
`;

export const LogoImage = styled.img`
  width: 45rem;
  height: 41rem;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopUpDiv = styled.span`
  padding: 4.4rem;
  font-size: 3.5rem;
  text-align: left;
  letter-spacing: 0.1rem;
`;

export const LinkText = styled(Link)`
  padding: 4.4rem;
  font-size: 3.5rem;
  text-align: left;
  letter-spacing: 0.1rem;
  color: var(--next-prev-button-color);
  margin-top: -7rem;
  text-decoration: none;
  
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
`;

export const TextBtn = styled(Link)`
  position: fixed;
  top: 122rem;
  left: 60rem;
  font-size: 4rem;
  font-weight: bold;
  color: var(--main-title-color);
  text-decoration: none;
`;
