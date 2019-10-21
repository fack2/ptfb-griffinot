import React from 'react';
import Resource from '../../CommonComponents/Resource';
import PrevButton from '../../CommonComponents/PrevButton';
import {
 Container, Imglogo, TitlePage, ImgTitle 
} from './index.style';
import data from '../../Data/bookData';
import logo from '../../assets/book-logo.png';

const Books = () => (
  <>
    <ImgTitle>
      <Imglogo src={logo} />
      <TitlePage>Books</TitlePage>
    </ImgTitle>
    <Container>
      {data.map(({
 id, img, bookTitle, price, description 
}) => (
        <Resource
          key={id}
          picture={img}
          title={bookTitle}
          price={price}
          description={description}
        />
      ))}
    </Container>
    <PrevButton prevLink="/resources" />
  </>
);

export default Books;
