import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivPrev = styled.div`
  margin-top: 8rem;
`;

export const PrevBtn = styled(Link)`
  border: none;
  background-color: white;
  font-size: 4rem;
  color: var(--next-prev-button-color);
  margin-left: 5rem;
  outline: none;
  text-decoration: none;
  font-family: 'Bitter', serif;
  padding-bottom: 6rem;

`;
