import React from 'react';
import PropTypes from 'prop-types';
import Resource from '../../CommonComponents/Resource';
import PrevButton from '../../CommonComponents/PrevButton';
import { PageTitle, ResoursesContainer } from './index.style';
import data from '../../Data/resourceDate';

let resourceLink;
const onClick = (id) => {
  switch (id) {
    case 1:
      resourceLink.push('/introductory-videos');
      break;
    case 2:
      resourceLink.push('/sensory-training');
      break;
    case 3:
      resourceLink.push('/sensory-introduction');
      break;
    case 4:
      resourceLink.push('/sensory-topics');
      break;
    case 5:
      resourceLink.push('/sensory-equipment');
      break;
    case 6:
      resourceLink.push('/books');
      break;
    case 7:
      resourceLink.push('/fine-motor-skills');
      break;
    default:
      resourceLink.push('/pencil-grip-reviews');
  }
};
const Resources = ({ history }) => {
  resourceLink = history;
  return (
    <>
      <PageTitle>Helpful resources</PageTitle>
      <ResoursesContainer>
        {data.map(({ id, picture, title }) => (
          <Resource
            key={id}
            picture={picture}
            title={title}
            price={null}
            description={null}
            onClick={() => onClick(id, history)}
          />
        ))}
      </ResoursesContainer>
      <PrevButton prevLink="/" marginLeft="2rem" marginTop="4rem" />
    </>
  );
};

Resources.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Resources;
