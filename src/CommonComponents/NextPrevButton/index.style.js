import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const PrevNextItem = styled.div`
	margin: 5rem 4rem;
`;

export const PrevNextButton = styled.img`
	margin-bottom: -0.5rem;
	height: 3rem;
	width: 3rem;
`;
export const PrevNextText = styled.span`
	text-decoration: 'none';
	padding-left: 1rem;
	padding-right: 1rem;
	font-family: Lato;
	font-size: 3.5rem;
	color: var(--next-prev-button-color);
`;

export const LinkButton = styled(Link)`
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
