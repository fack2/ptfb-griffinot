import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// We have different options here so we are using props for the attributes that change coordinates, the other option is for the basic ones that don't change coordinates.
export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20%;
  margin: ${props => props.margin || '0% 7% 0% 0%'};
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: ${props => props.margin1 || '0% 7% 0% 2%'};
    padding-top: 15%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: ${props => props.margin2 || '0% 7% 0% 2%'};
    padding-top: 10%;
  }
  @media (min-width: 1281px) {
    margin: ${props => props.margin3 || '0% 7% 0% 2%'};

    padding-top: 10%;
  }
`;

export const Item = styled.span`
  color: #000000;
  font-size: 2rem;
`;
export const Image = styled.img`
  width: ${props => props.width || '18%'};
  height: ${props => props.height || '57px'};
  @media (min-width: 768px) and (max-width: 1024px) {
    width: ${props => props.width1 || '12%'};
    margin-right: ${props => props.margin || '2%'};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: ${props => props.width2 || '11%'};
    height: ${props => props.height2 || '49px'};
    margin: ${props => props.margin2 || '0% 0% 0% 0%'};
  }
  @media (min-width: 1281px) {
    width: ${props => props.width3 || '10%'};
    height: ${props => props.height3 || '49px'};
    margin: ${props => props.margin3 || '0% 0% 0% 0%'};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: ${props => props.margin || '6% 0% 0% 3%'};
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: ${props => props.margin1 || '3% 0% 0% -1%'};
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: ${props => props.margin2 || '4% 0% 0% 3%'};
  }
  @media (min-width: 1281px) {
    margin: ${props => props.margin3 || '2% 0% 0% 3%'};
  }
`;
export const CloseDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ImageClose = styled.img`
  width: 19%;
  margin-top: 59%;
`;

export const ButtonClose = styled.button`
  border: none;
  background: #fff;
`;
export const Contect = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 1.8rem;
  margin-top:8%;
`;
