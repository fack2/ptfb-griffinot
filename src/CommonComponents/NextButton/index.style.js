import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const NextItem = styled.div`
  margin-left: 67rem;
`;

export const Nextbutton = styled.img`
  height: 3rem;
  width: 3rem;
`;
export const NextText = styled.span`
  text-decoration: 'none';
  padding-left: 1rem;
  padding-right: 1rem;
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
