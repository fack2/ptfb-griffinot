import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivNext = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const NextBtn = styled(Link)`
  font-size: 1.9rem;
  color: #e8425c;
  outline: none;
  text-decoration: none;
  margin-top: 4%;
  padding-bottom:1%;
`;
