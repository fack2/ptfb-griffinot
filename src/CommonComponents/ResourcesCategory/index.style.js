import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResourcesCategoryDiv = styled.div`
  width: 89%;
  height: 58px;
  border: 1px solid #a7a7a7;
  border-radius: 7px;
  margin-bottom: 9%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 73%;
  }
  @media (min-width: 1025px) and (max-width: 1280px){
    width: 73%;

  }
  @media (min-width: 1281px){
    width: 64%;

  }
`;

export const ImageResourcesCategory = styled.img`
  margin-top: 3%;
  margin-left: 4%;
  width: 10%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 7%;
    margin-top: 2%;
  }
  @media (min-width: 1025px) and (max-width: 1280px){
    width: 7%;
    margin-top: 2%;
  }
  @media (min-width: 1281px){
    width: 7%;
    margin-top: 2%;
  }
`;
export const TitleResourcesCategory = styled.p`
  margin-left: 21%;
  margin-top: -8.4%;
  font-size: 1.3rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -5.4%;
    font-size: 1.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px){
    margin-top: -5.4%;
    font-size: 1.5rem;
  }
  @media (min-width: 1281px){
    margin-top: -5.4%;
    font-size: 1.5rem;
  }
`;
