import React from 'react';
import Book from '../../CommonComponents/Book';
import PrevButton from '../../CommonComponents/PrevButton';
import {
  BooksContainer,
  PageLogo,
  PageTitle,
  BooksLogoTitleContainer,
} from './index.style';
import data from '../../Data/bookData';
import logo from '../../assets/book-logo.png';

const Books = () => (
  <>
    <BooksLogoTitleContainer>
      <PageLogo src={logo} />
      <PageTitle>Books</PageTitle>
    </BooksLogoTitleContainer>

    <BooksContainer>
      {data.map(({
 id, img, bookTitle, price, description, bookLink 
}) => (
        <Book
          key={id}
          bookImg={img}
          title={bookTitle}
          price={price}
          description={description}
          bookLink={bookLink}
        />
      ))}
    </BooksContainer>
    <PrevButton
      prevLink="/resources"
      marginLeft1=" 8%"
      marginLeft2="5%"
      marginLeft4="3%"
      marginLeft3="4%"
    />
  </>
);

export default Books;
