import React from 'react';
import {
  BlogDiv, ImageBlog, Div, TitleBlog,
} from './index.style';

const Blogs = (Title, Imageblogs) => (
  <Div>
    <BlogDiv>
      <ImageBlog src={Imageblogs} />
      <TitleBlog>{Title}</TitleBlog>

    </BlogDiv>
  </Div>

);
export default Blogs;
