import styled from 'styled-components';

export const QuestionCard = styled.div`
  border-radius: 0.8rem;
  border: 0.5px solid #928e8e;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: auto;
  padding: 5% 4% 0 2%;
  margin: 5.5% 0% 5.5% 0%;
  display: flex;
  flex-wrap: wrap;
  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 2.5% 8% 3% 2%;
    text-align: left;
    font-size: 1.24rem;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4% 0% 2% 2.5%;
    margin: 2% 9% 1% 4%;
    height: auto;
    font-size: 1.24rem;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 4% 0% 2% 2.5%;
    margin: 2% 1% 1% -3%;
    height: auto;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    padding: 4% 0% 0% 2.5%;
    margin: 2% 12% 1% 8%;
    height: auto;
  }
`;

export const QuestionNumber = styled.span`
  font-weight: bold;
  width: 18px;
  height: 18px;
  padding-top: 0.5%;
  line-height: 150%;
  font-size: 1rem;
  color: #ffffff;
  background: var(--next-prev-button-color);
  border-radius: 50%;
  text-align: center;
  padding: 0.5% 0.5% 0 0;
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 22px;
    height: 22px;
    line-height: 124%;
    font-size: 1.3rem;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 25px;
    height: 25px;
    padding-top: 0.5%;
    line-height: 123%;
    font-size: 1.7rem;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    width: 21px;
    height: 21px;
    padding-top: 0.5%;
    line-height: 123%;
    font-size: 1.25rem;
  }
`;

export const QuestionText = styled.p`
  margin: -0.5% 0 0 3%;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--main-font-color);
  flex-basis: 85%;
  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    margin: -0.5% 0 0 3%;
    text-align: left;
    font-size: 1.4rem;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: -0.2% 0 0 3%;
    text-align: left;
    font-size: 1.8rem;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    margin: -0.2% 0 0 3%;
    text-align: left;
    font-size: 1.8rem;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #787878;
  box-sizing: border-box;
  margin: 0 -5% 0 1.5%;
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 25px;
    height: 22px;
    margin: 0 -5% 0 2.5%;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    width: 25px;
    height: 22px;
    margin: 0 -5% 0 2.5%;
  }
`;

export const QuestionDescription = styled.p`
  margin: 0.8% 5% 3.5% 8%;
  font-weight: 600;
  font-size: 1.3rem;
  color: #2d2323;
  /* Media Query for low resolution  Tablets, Ipads */
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0.3% 6% 3.2% 8%;
    text-align: left;
    font-size: 1.2rem;
  }
  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0.3% 9% 2% 6%;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0.5% 5% 3% 7.5%;
    text-align: left;
    font-size: 1.5rem;
  }
  /* Media Query for Large screens*/
  @media (min-width: 1281px) {
    margin: 0.5% 7% 3% 6.9%;
    text-align: left;
    font-size: 1.4rem;
  }
`;
