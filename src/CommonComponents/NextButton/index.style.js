import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivNext = styled.div`
  margin-top: 8rem;
  margin-left: ${(props) => props.Margin || '80rem'};

`;

export const NextBtn = styled(Link)`
  font-size: 4rem;
  height: 50rem;
  color: var(--next-prev-button-color);
  outline: none;
  text-decoration: none;
  font-family: 'Bitter', serif;
  padding-bottom: 6rem;
`;
