import React from 'react';
import { TextField } from '@material-ui/core';

const Input = (props) => <TextField {...props} />;

const areEqual = (prevProps, nextProps) => {
  if (
    prevProps.key !== nextProps.key
    || prevProps.value !== nextProps.value
    || prevProps.disabled !== nextProps.disabled
  ) {
    return false;
  }
  return true;
};

export default React.memo(Input, areEqual);
