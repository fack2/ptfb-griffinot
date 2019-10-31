import styled from 'styled-components';

export const LevelDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4.9rem;
`;

export const CircleLevel = styled.div`
  width: 20%;
  height: 6rem;
  margin-left: 2%;
  background: #ffce1c;
  border-radius: 11rem;
  z-index: 1;
@media (min-width: 768px) and (max-width: 1024px) {
  width: 15%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
  width: 11%;
}

@media (min-width: 1281px) {
  width: 9%;
}
`;

export const ParagraphLevel = styled.p`
  font-size: 1.4rem;
  margin-top: 36%;
  color: #e8425c;
`;

export const TitleLevel = styled.div`
  width: 38rem;
  height: 3.9rem;
  background: #205c8b;
  border: 1px solid #a0a0a0;
  box-sizing: border-box;
  border-radius: 82px;
  margin-top: 3.5%;
  margin-left: -12%;
  margin-right: 5%;
@media (min-width: 1025px) and (max-width: 1280px) {
  margin-top: 2.5%;
  margin-left: -9%;
}

@media (min-width: 1281px) {
  margin-top: 1.5%;
  margin-left: -7%;
}
`;

export const LevelIntro = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: -55%;
  margin-top: 5%;
  @media (min-width: 1281px) {
    margin-left: -71%;
}
`;

export const TitleParagraph = styled.p`
  font-size: 1.5rem;
  margin-left: 4%;
  margin-top: 2%;
  color: #ffffff;
`;

export const BodyPage = styled.div`
  background: #cfcfcf;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 4.9rem;
`;

export const PopUPCard = styled.div`
  text-align: center;
  display: flex;
  height: 0.6rem;
`;

export const PopUpBox = styled.div`
  width: 185%;
  height: 70vh;
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -41%;
  margin-top: -142%;

@media (min-width: 481px) and (max-width: 767px) {
    margin-left: -40%;
    width: 176%;
    margin-top: -110%;
    height: 62vh;
}

@media (min-width: 768px) and (max-width: 1024px) {
  margin-left: -6%;
  width: 177%;
  margin-top: -58%;
    height: 58vh;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: -2%;
    width: 167rem;
    margin-top: -58%;
    margin-right: -4%;
    height: 58vh;
}
@media (min-width: 1281px) {
    margin-left: -2%;
    width: 167rem;
    margin-top: -34%;
    margin-right: -4%;
    height: 58vh;
}
`;

export const Logo = styled.div`
  width: 101%;
  height: 155px;
  background: #205c8b;
  margin-left: -0.5%;
  margin-top: -2.5%;
`;

export const LogoImage = styled.img`
  width: 47%;
  margin-left: 4%;
  margin-top: 1%;
@media (min-width: 768px) and (max-width: 1024px) {
  margin-top: -3%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
 margin-top: -8%;
}

@media (min-width: 1281px) {
    margin-top: -3%;
    width: 30%;
}
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopUpDiv = styled.span`
  font-size: 1.3rem;
  margin-left: 5%;
  margin-top: -3%;
  text-align: justify;
  margin-right: 5%;
  letter-spacing: 0.1rem;
`;

export const ToLink = styled.a`
  color: var(--main-title-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  position: fixed;
    bottom: 23%;
    left: 61%;

@media (min-width: 481px) and (max-width: 767px) {
    bottom: 23%;
    left: 61%;
}

@media (min-width: 768px) and (max-width: 1024px) {
    bottom: 23%;
    left: 59%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    bottom: 32%;
    left: 61%;
}
@media (min-width: 1281px) {
    bottom: 23%;
    left: 61%;
}
`;

export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  font-size: 2.5rem;
  line-height: 20px;
    margin-left: 127%;
    margin-top: -137%;

@media (min-width: 481px) and (max-width: 767px) {
    margin-left: 121%;
    margin-top: -107%;
}

@media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 99%;
    margin-top: -59%;
}

@media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 99%;
    margin-top: -59%;
}
@media (min-width: 1281px) {
    margin-left: 100%;
    margin-top: -36%;
}
`;
