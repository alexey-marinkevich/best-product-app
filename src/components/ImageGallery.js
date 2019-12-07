import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

const ImageGallery = ({ images }) => {
  const Images = images.map((img) => <img src={img} key={img} alt="Product Gallery Item" />);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Images}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
