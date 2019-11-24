import styled from 'styled-components';


export const Logo = styled.div`
  width: 100.5%;
  height: 155px;
  background: #205c8b;
  margin-left: -0.5%;
  margin-top: -2.5%;
`;

export const LogoImage = styled.img`
  width: 53%;
  height: 175px;
  margin-left: 25%;
  margin-top: -1%;
`;


export const PopUpDiv = styled.span`
  font-size: 1.5rem;
  position: absolute;
  top: 54%;
  left: -27%;
@media (max-width: 480px) {
    left: -20%;
    font-size: 1.3rem;
}

@media (min-width: 481px) and (max-width: 767px) {
  left: -15%
}

@media (min-width: 768px) and (max-width: 1024px) {
  left: 4%
}

@media (min-width: 1025px) and (max-width: 1280px) {
  left: 2%
}
@media (min-width: 1281px) {
  left: 6%
}
`;

export const LinkText = styled.a`
  position: absolute;
  top: 77%;
  left: -20%;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  color: var(--next-prev-button-color);
  text-decoration: none;
  @media (min-width: 481px) and (max-width: 767px) {
  left: -15%
}

@media (min-width: 768px) and (max-width: 1024px) {
  left: 4%
}

@media (min-width: 1025px) and (max-width: 1280px) {
  left: 2%
}
@media (min-width: 1281px) {
  left: 6%
}
`;

export const ContainerBtn = styled.a`
  display: flex;
  justify-content: space - around;
  margin-top: 15rem;
`;

export const TextBtn = styled.button`
  color: var(--main-title-color);
  text-decoration: none;
  outline: none;
  background-color: white;
  border: none;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -18%;
  top: 91%;
@media (min-width: 768px) and (max-width: 1024px) {
  right: 4%;
  top: 93%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  right: 2%;
  top: 98%;
}
@media (min-width: 1281px) {
  right: 3%;
  top: 101%;
}
`;

export const Text = styled.div`
  height: 155px;
  background: white;
  margin-left: -0.5%;
  margin-top: -0.5%;
`;

export const BigDiv = styled.div`
  width: 185%;
  margin-left: -40%;
  margin-bottom: -8%;

@media (max-width: 480px) {
  width: 165%;
  margin-left: -33%;
}

@media (min-width: 481px) and (max-width: 767px) {
  width: 153%;
  margin-left: -28%;
}

@media (min-width: 768px) and (max-width: 1024px) {
    width: 106%;
    margin-left: -2%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  width: 106%;
  margin-left: -3%;
}
@media (min-width: 1281px) {
    width: 103%;
    margin-left: -1%;
}
`;


export const BtnDiv = styled.div`
  height: 33px;
  background: white;
  margin-left: -0.5%;
  margin-top: -0.5%;
  display: flex;
  justify-content: space-around;
`;


export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 1% 2%;
  right: -29%;
  top: -2%;
  font-size: 2.5rem;
  line-height: 20px;
  color: white;

@media (min-width: 481px) and (max-width: 767px) {
  right: -23%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  right: -4%;
  top: -3%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    right: -4%;
    top: -6%;
}
@media (min-width: 1281px) {
    right: -3%;
    top: -7%;
}
`;
