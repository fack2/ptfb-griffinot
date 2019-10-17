import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NextBtn = styled(Link)`
  border: none;
  background-color: white;
  font-size: 3.5rem;
  color: var(--next-prev-button-color);
  margin-left: 69rem;
  outline: none;
  text-decoration: none;
`;

export const PrevBtn = styled(Link)`
  border: none;
  background-color: white;
  font-size: 3.5rem;
  color: var(--next-prev-button-color);
  margin-left: 2rem;
  outline: none;
  text-decoration: none;
`;
