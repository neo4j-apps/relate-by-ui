import React from 'react';
import { Button } from 'semantic-ui-react';
import { RelateByUIButton } from './Types';

const ButtonTemplate = ({ title, className, onClick, icon, basic, color }: RelateByUIButton) => {
  const classNames = ['relate-by-ui-button'];
  if (className) {
    classNames.push(className);
  }

  return (
    <Button className={classNames.join(' ')} onClick={onClick} basic={basic} color={color}>
      {icon && <i aria-hidden="true" className={`ui-icon-${icon}`} />} {title}
    </Button>
  );
};

export default ButtonTemplate;
