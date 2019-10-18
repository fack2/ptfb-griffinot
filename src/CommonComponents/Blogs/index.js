import React from 'react';
import {
  BlogDiv, ImageBlog, Container, TitleBlog,
} from './index.style';

const Blogs = (Title, Imageblogs) => (
  <Container>
    <BlogDiv>
      <ImageBlog src={Imageblogs} />
      <TitleBlog>{Title}</TitleBlog>

    </BlogDiv>
  </Container>

);
export default Blogs;
