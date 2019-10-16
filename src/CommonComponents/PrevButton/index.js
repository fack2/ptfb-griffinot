import React from 'react';
import { Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import { PrevBtn } from './index.style';

const PrevButton = ({ prevLink }) => (
  <>
    <Button.Group>
      <PrevBtn to={prevLink} type="primary">
        <Icon type="left" />
        Prev
      </PrevBtn>
    </Button.Group>
  </>
);

PrevButton.propTypes = {
  prevLink: PropTypes.string.isRequired,
};

export default PrevButton;
