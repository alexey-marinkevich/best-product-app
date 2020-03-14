import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    overflowX: 'overlay',
    overflowY: 'hidden',
    alignItems: 'baseline',
    '& img': {
      margin: '0 30px 25px 0',
      maxHeight: '700px',
      width: 'auto',
      '-webkit-user-drag': 'none',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '90vh',
      },

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
}));

const ImageGallery = ({ images }) => {
  const classes = useStyles();
  const imageNodes = images.map((img) => <img src={img} key={img} alt="Product Gallery Item" />);

  return <div className={classes.root}>{imageNodes}</div>;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;
