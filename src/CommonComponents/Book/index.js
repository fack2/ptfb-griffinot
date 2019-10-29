import React from 'react';
import PropTypes from 'prop-types';

import {
  BookPrice,
  Container,
  BookImage,
  BookDescription,
  BookImageContainer,
  BookTitle,
  BookCard,
} from './index.style';

const Book = ({
  id, bookImg, title, price, description, bookLink, onClick,
}) => (
  <Container>
    <BookCard key={id} onClick={onClick} name={id} href={bookLink}>
      <BookTitle>{title}</BookTitle>
      <BookPrice>{price}</BookPrice>
      <BookImageContainer>
        <BookImage src={bookImg} />
        <BookDescription>{description}</BookDescription>
      </BookImageContainer>
    </BookCard>
  </Container>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  bookImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  bookLink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
