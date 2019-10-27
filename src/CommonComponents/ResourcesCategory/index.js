import React from 'react';
import PropTypes from 'prop-types';
import {
  ResourcesCategoryDiv, ImageResourcesCategory, Container, TitleResourcesCategory,
} from './index.style';

const ResourcesCategory = ({ Title, ImageCategory }) => (
  <Container>
    <ResourcesCategoryDiv>
      <ImageResourcesCategory src={ImageCategory} />
      <TitleResourcesCategory>{Title}</TitleResourcesCategory>
    </ResourcesCategoryDiv>
  </Container>
);
ResourcesCategory.propTypes = {
  Title: PropTypes.string.isRequired,
  ImageCategory: PropTypes.string.isRequired,
};
export default ResourcesCategory;
