import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonDismissSecondary = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.secondary = true;
  newProps.negative = true;
  newProps.basic = true;

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'dismiss';
  }

  const StyledButton = styled(Button)`
    .ui.relate-by-ui-button& {
      font-weight: 600;
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonDismissSecondary;