import React from 'react';
import PropTypes from 'prop-types';
import {
  BlogDiv, ImageBlog, Container, TitleBlog,
} from './index.style';

const Blog = ({ Title, Imageblogs }) => (
  <Container>
    <BlogDiv>
      <ImageBlog src={Imageblogs} />
      <TitleBlog>{Title}</TitleBlog>
    </BlogDiv>
  </Container>
);
Blog.propTypes = {
  Title: PropTypes.string.isRequired,
  ImageBlog: PropTypes.string.isRequired,
};
export default Blog;
