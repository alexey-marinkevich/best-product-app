import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { GiTrashCan } from 'react-icons/gi';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    padding: '25px 0',
    overflowX: 'overlay',
    overflowY: 'hidden',
    alignItems: 'baseline',
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
  imgContainer: {
    position: 'relative',
    marginRight: '30px',
    cursor: 'pointer',
    '&:hover': {
      '& img': {
        filter: 'brightness(0.6)',
      },
    },
    '&:last_child': {
      marginRight: '0px',
    },
    '& img': {
      margin: '0',
      maxHeight: '200px',
      width: 'auto',
      filter: 'brightness(1)',
      transition: '.3s',
      '-webkit-user-drag': 'none',
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  removeIcon: {
    opacity: '0',
    fontSize: '55px',
    color: '#fff',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.3s',
    '.imgContainer:hover &': {
      opacity: 1,
    },
  },
});

const SuggestedImagesPreview = ({ images, deleteAction }) => {
  const classes = useStyles();

  const Images = images.map((img, id) => (
    <div
      role="button"
      className={cn(classes.imgContainer, 'imgContainer')}
      onClick={() => deleteAction(id)}
      key={img}
    >
      <img src={img} alt="Gallery item" />
      <GiTrashCan className={cn(classes.removeIcon, 'removeIcon')} />
    </div>
  ));
  return <div className={classes.root}>{Images}</div>;
};

SuggestedImagesPreview.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default SuggestedImagesPreview;
