import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideName: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '15%',
    textAlign: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: '30px 10px',
    boxSizing: 'border-box',
    userSelect: 'none',
    right: 0,
    top: 0,
    maxHeight: '1000px',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      right: '0',
      top: '0',
      maxWidth: 'inherit',
      position: 'relative',
      width: '100%',
      padding: '0',
      maxHeight: '1000px',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      whiteSpace: 'inherit',
    },

    '& h1': {
      writingMode: 'vertical-rl',
      fontSize: '60px',
      margin: 0,
      fontWeight: '100',
      [theme.breakpoints.down('sm')]: {
        writingMode: 'horizontal-tb',
        padding: '5px 30px 10px 30px',
        backgroundColor: '#fff',
        transform: 'translate(0, -6vh)',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '10vw',
        padding: '30px 0 0 0',
        transform: 'translate(0, 0)',
      },
    },
  },
}));

const propTypes = {
  prodName: PropTypes.string.isRequired,
};

const SideName = ({ prodName }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideName}>
      <h1>{prodName}</h1>
    </div>
  );
};

SideName.propTypes = propTypes;

export default SideName;
