import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;

`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: #205c88;
  margin-bottom: 7%;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: 0.5px solid #2D2323;
  transform: rotate(180deg);
`;

export const Para1 = styled.p`
  font-size: 1.4rem;
  color: black;
  margin-top: 6%;
  margin-bottom: 6%;
  text-align: justify;
`;

export const FineMotorImg = styled.img`
  width: 100%;
  border: 0.1rem solid #2D2323;

`;

export const Para2 = styled.p`
  font-size: 1.4rem;
  color: black;
  margin-top: 6%;
  margin-bottom: 6%;
  text-align: justify;

`;

export const NextText = styled.p`
`;

export const NextArrow = styled.img`
    width: 7%;
    margin-left: 93%;
    margin-bottom: 5%;
`;


// pop up style

export const Logo = styled.div`
  width: 100.5%;
  height: 155px;
  background: ${(props) => props.Background || '#205c8b'};
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
  left: -23%;
  margin-right: -29%;
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


export const OptionBtn = styled.button`
  border: 0.1rem #cecece solid;
  background-color: white;
  border-radius: 4rem;
  width: 20%;
  height: 30px;
  font-size: 1.5rem;
  outline: none;
  margin-left: 3%;
  margin-top: -8%;

@media (max-width: 480px) {
  margin-top: -8%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  margin-top: -7%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  margin-top: -7%;
  width: 13%;
}
@media (min-width: 1281px) {
  margin-top: -5%;
  width: 12%;
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
