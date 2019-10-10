import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const PrevNextItem = styled.div`
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 4rem;
`;

export const PrevNextButton = styled.img`
  margin-bottom: -0.5rem;
  height: 3rem;
  width: 3rem;
`;
export const PrevNextText = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: Lato;
  font-size: 3.5rem;
  color: var(--next-prev-button-color);
`;

// export const LinkButton = styled.Link`
//   textdecoration: 'none';
// `;
