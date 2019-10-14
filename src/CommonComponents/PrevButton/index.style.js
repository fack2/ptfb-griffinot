import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const PrevItem = styled.div`
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 10rem;
`;

export const Prevbutton = styled.img`
  margin-bottom: -0.5rem;
  height: 3rem;
  width: 3rem;
`;
export const PrevText = styled.span`
  text-decoration: 'none';
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: Lato;
  font-size: 3.5rem;
  color: var(--next-prev-button-color);
`;

export const LinkButton = styled.a`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    margin-top: 25rem;

  }
`;
