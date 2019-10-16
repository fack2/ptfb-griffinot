import React from 'react';
import dataBlog from '../../Data/blogData';
import {
  TitleBlog, Container, BodyBlogs, Link,
} from './index.style';
import Blog from '../../CommonComponents/Blog';
import PrevButton from '../../CommonComponents/PrevButton';

const Blogs = () => (
  <>
    <Container>
      <TitleBlog>Here are other resources that can help your child:</TitleBlog>
    </Container>
    <BodyBlogs>
      {dataBlog.map(({ Title, ImageBlog, LinkBlog }) => (
        <Link href={LinkBlog}>

          <Blog Title={Title} Imageblogs={ImageBlog} />
        </Link>
      ))}
    </BodyBlogs>
    <PrevButton prevLink="/resources" />
  </>
);
export default Blogs;
