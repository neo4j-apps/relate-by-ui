import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButtonPropTypes } from '.';

const ButtonApprovePrimary = (props: RelateByUIButtonPropTypes) => {
  const newProps: RelateByUIButtonPropTypes = { ...props };

  newProps.primary = true;
  newProps.positive = true;
  newProps.color = 'blue';

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'confirm';
  }

  const StyledButton = styled(Button)`
    .ui.relate-by-ui-button& {
      font-weight: 600;
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonApprovePrimary;
