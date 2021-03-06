import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-weight: bold;
  margin: 0% 0% 3.5% 0;
  /* Media Query for low resolution Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    margin: 0% 0% 3.5% 0;
    font-size: 1.5rem;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    margin: 0% 7% 3.5% -4px;
    font-size: 1.8rem;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    margin: 0% 7% 3.5% -4px;
    font-size: 2.65rem;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    text-align: center;
    margin: 0% -1% 3.5% -4px;
    font-size: 2.7rem;
  }
`;

export const Line = styled.hr`
  border-top: 1px solid var(--main-font-color);
  margin: 0% 0%;
  /* Media Query for Mobile Devices */
  @media (min-width: 481px) and (max-width: 767px) {
    border-top: 1px solid var(--main-font-color);
    margin: 0% 0%;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0% 5% 0% 1.5%;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0% -2%;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    margin: 0% -1.5%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 4% 0 3% 0%;
  font-weight: bold;
  /* Media Query for low resolution Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.4rem;
    margin: 2% 0 2% 3%;
    font-weight: bold;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.7rem;
    margin: 2% 0 2% 4%;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.12rem;
    margin: 2% 0 2% -4%;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    font-size: 2rem;
    margin: 2% 0 2% 8%;
  }
`;

export const DivData = styled.div`
  display: flex;
  margin: 2% 4% 0% 4%;
  flex-direction: column;
  /* Media Query for low resolution Tablets, Ipads*/
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2% 8%;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 2% 8%;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 2% 10%;
  }
`;

export const OptionTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  font-weight: bold;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    margin: 0% 6%;
  }
  /* Media Query for Large screens */
  @media (min-width: 1281px) {
    font-size: 2rem;
    margin: -2% 11% -5% 11%;
  }
`;

export const Option = styled.button`
  display: flex;
  justify-content: center;
  background: #d6ebf7;
  color: #000000;
  outline: none;
  text-align: center;
  border-radius: 1rem;
  font-size: 1.7rem;
  height: 80px;
  padding: 1% 5% 0% 5%;
  margin: 10% -4.5% -2% -4.5%;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.9rem;
    height: 80px;
    padding: 1% 5% 0% 5%;
    margin: 10% 4.5% -2% 4.5%;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.5rem;
    height: 78px;
    padding: 1% 5% 0% 5%;
    margin: 10% 10.5% -2% 10.5%;
  }
  /* Media Query for Large screens */
  @media (min-width: 1281px) {
    font-size: 1.8rem;
    height: 80px;
    padding: 1% 5% 0% 5%;
    margin: 10% 10.5% -2% 10.5%;
  }
`;

export const LinkOption = styled(Link)`
  text-decoration: none;
  color: var(--main-font-color);
`;

export const NextPrevDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 14%;
  margin: auto;
  padding-top: 6%;
`;

// pop up style
export const LevelDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4.9rem;
`;

export const CircleLevel = styled.div`
  width: 34%;
  height: 125px;
  border: 0.5rem #8ac456 solid;
  border-radius: 54rem;
  z-index: 1;
  margin-top: -3%;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 38%;
    height: 144px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 37%;
    height: 166px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 27%;
    height: 176px;
  }
  @media (min-width: 1281px) {
    width: 27%;
    height: 169px;
  }
`;

export const ParagraphLevel = styled.p`
  font-size: 1.3rem;
  margin-top: 34%;
  color: #e8425c;
`;

export const LevelIntro = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 4%;
  margin-right: 25%;
  margin-top: 5%;
  text-align: left;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -26%;
  }
  @media (min-width: 1281px) {
    margin-left: -71%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: -30%;
  }
  @media (min-width: 1281px) {
    margin-left: -47%;
    margin-top: 1%;
    margin-bottom: 3%;
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
`;

export const PopUPCard = styled.div`
  text-align: center;
  display: flex;
  height: 0.6rem;
`;

export const PopUpBox = styled.div`
  width: 183.5%;
  height: 70vh;
  background: #fffcfc;
  border: 0.1rem solid #c4c4c4;
  margin-left: -41%;
  margin-top: -118%;
  margin-right: -46%;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: -40%;
    height: 63vh;
    margin-top: -114%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -15%;
    margin-right: -16%;
    margin-top: -79%;
    height: 64vh;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: -15%;
    margin-right: -16%;
    margin-top: -48%;
    height: 68vh;
  }
  @media (min-width: 1281px) {
    margin-left: -2%;
    width: 167rem;
    margin-top: -42%;
    margin-right: -4%;
    height: 69vh;
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
    margin-top: -6%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: -8%;
    width: 39%;
  }
  @media (min-width: 1281px) {
    margin-top: -6%;
    width: 36%;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopUpDiv = styled.span`
  font-size: 1.3rem;
  margin-left: 5%;
  margin-top: -12%;
  text-align: justify;
  margin-right: 5%;
  letter-spacing: 0.1rem;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: -7%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: -4%;
  }
  @media (min-width: 1281px) {
    margin-top: -5%;
  }
`;

export const ToLink = styled.a`
  color: var(--main-title-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 20px;
  margin-left: 46%;
  margin-top: 4%;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 54%;
    margin-top: 7%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 54%;
    margin-top: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 65%;
    margin-top: 8%;
  }
  @media (min-width: 1281px) {
    margin-left: 70%;
    margin-top: 11%;
  }
`;

export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  font-size: 2.5rem;
  line-height: 20px;
  margin-left: 78%;
  margin-top: -4%;
  color: white;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 78%;
    margin-top: -4%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 60%;
    margin-top: -4%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 48%;
    margin-top: -2%;
  }
  @media (min-width: 1281px) {
    margin-left: 49%;
    margin-top: -2%;
  }
`;
export const Para = styled.p`
    font-size: 1.2rem;
    margin-top: 37%;
`;
