import React from 'react';
import Resource from '../../CommonComponents/Resource';
import PrevButton from '../../CommonComponents/PrevButton';
import { TitleH, Container } from './index.style';
import data from '../../Data/resourceDate';

let h;
const onClick = (id, history) => {
  switch (id) {
    case 1:
      h.push('/introductory-videos');
      break;
    case 2:
      h.push('/sensory-training');
      break;
    case 3:
      h.push('/sensory-introduction');
      break;
    case 4:
      h.push('/sensory-topics');
      break;
    case 5:
      h.push('/sensory-equipment');
      break;
    case 6:
      h.push('/books');
      break;
    case 7:
      h.push('/fine-motor-skills');
      break;
    default:
      h.push('/pencil-grip-reviews');
  }
};
const Resources = ({ history }) => {
  h = history;
  return (
    <>
      <TitleH>Helpful resources</TitleH>
      <Container>
        {data.map(({
 id, picture, title, price, description 
}) => (
          <Resource
            key={id}
            picture={picture}
            title={title}
            price={null}
            description={null}
            onClick={() => onClick(id, history)}
          />
        ))}
        <PrevButton prevLink="/" />
      </Container>
    </>
  );
};
export default Resources;
