import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    padding: '25px 0 0 0px',
    overflow: 'overlay',
    alignItems: 'baseline',
    '& img': {
      margin: '0 30px 25px 0',
      maxHeight: '200px',
      width: 'auto',
      '-webkit-user-drag': 'none',
      '&:last-child': {
        marginRight: 0,
      },
    },
    '&::-webkit-scrollbar': {
      height: '0.5em',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#333',
      borderRadius: '50px',
      margin: '5px',
    },
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
  },
  btn: {
    position: 'relative',
    marginRight: '25px',
    cursor: 'pointer',
    '&:last_child': {
      marginRight: '0px',
    },
    '&::after': {
      content: "'Remove'",
      opacity: '0',
      fontSize: '25px',
      color: '#fff',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -100%)',
      textShadow: '1px 1px #808080, 1px 0px #808080, 0px 0 #808080, -1px 1px #808080',
      transition: '0.3s',
      '-webkit-user-select': 'none',
    },
    '&:hover': {
      '&::after': {
        opacity: 1,
      },
    },
  },
});


const SuggestedImagesPreview = ({ images, deleteAction }) => {
  const classes = useStyles();

  const Images = images.map((img, id) => (
    <button
      type="button"
      className={classes.btn}
      onClick={() => deleteAction(id)}
      key={img}
    >
      <img src={img} alt="Gallery item" />
    </button>
  ));
  return <div className={classes.root}>{Images}</div>;
};

SuggestedImagesPreview.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default SuggestedImagesPreview;
