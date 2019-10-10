import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20rem;
	justify-content: space-between;
`;
// We have different options here so we are using props for the attributes that change coordinates, the other option is for the basic ones that don't change coordinates.
export const MenuItem = styled.div`
	display: flex;
	flex-direction: row;
	order: ${(props) => props.order};
	margin-top: ${(props) => props.marginTop || '5rem'};
	height: 15rem;
`;

export const Item = styled.span`
	margin: ${(props) => props.margin || '5rem 2rem 4rem 5rem'};
	width: ${(props) => props.width || '17rem'};
	font-size: ${(props) => props.fontSize || '3.3rem'};
`;
export const Image = styled.img`
	width: ${(props) => props.width || '12.6rem'};
	height: ${(props) => props.height || '12.6rem'};
`;
