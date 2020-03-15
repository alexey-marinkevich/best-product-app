import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    height: '45vh',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
    },

    '&:nth-child(even)': {
      flexDirection: 'row-reverse',
      '& button': {
        right: '0',
        left: '25px',
        textAlign: 'right',
        '&:hover': {
          '&::after': {
            left: '-25px',
          },
          '& span': {
            transform: 'translate(-88px,-8px)',
          },
        },
        '&::after': {
          top: '-145px',
          left: '-205px',
          transform: 'rotate(45deg)',
          transition: 'left .3s',
        },
        '& span': {
          position: 'absolute',
          right: '17px',
          transform: 'translate(0,-8px)',
          wordBreak: 'keep-all',
        },
      },
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    maxWidth: '400px',
    padding: '20px 30px',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      width: '98%',
      bottom: '2%',
      display: 'flex',
      padding: '10px 20px 14px 20px',
      position: 'absolute',
      maxWidth: 'initial',
      transform: 'translate(-50%, 0)',
      flexDirection: 'column',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  productName: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
    fontWeight: '100',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  productDescription: {
    fontSize: '16px',
    color: '#333',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  productImage: (props) => ({
    width: '100%',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1)',
    transition: 'transform 10s, filter 1s',
    zIndex: '-100',

    '.root:hover &': {
      transform: 'scale(1.1)',
      transition: 'transform 10s, filter 1s',
      filter: 'brightness(0.8)',
      [theme.breakpoints.down('sm')]: {
        filter: 'none',
        transform: 'none',
        transition: 'none',
      },
    },
  }),
  button: {
    position: 'absolute',
    right: '25px',
    bottom: '20px',
    width: '190px',
    height: '40px',
    padding: '15px',
    background: 'none',
    border: '2px solid white',
    color: '#fff',
    fontSize: '16px',
    textAlign: 'left',
    overflow: 'hidden',
    cursor: 'pointer',
    transform: 'translate(0, 75px)',
    transition: 'border-bottom-width .3s, transform .5s, color .3s',
    '&:hover': {
      color: '#000',
      '& span': {
        transform: 'translate(88px,-8px)',
        transition: 'transform .3s',
      },
      '&::after': {
        left: '70px',
      },
    },
    '& span': {
      transform: 'translate(0, -8px)',
      position: 'absolute',
      transition: 'transform .3s',
    },

    '&::after': {
      content: "''",
      position: 'absolute',
      width: '180px',
      height: '220px',
      top: '-145px',
      left: '230px',
      backgroundColor: '#fff',
      transform: 'rotate(45deg)',
      transition: '.3s',
      zIndex: '-100',
    },

    '.root:hover &': {
      transform: 'translate(0, 0)',
      [theme.breakpoints.down('sm')]: {
        transform: 'translate(0, 75px)',
      },
    },
  },
}));

const Product = ({
  id, prodName, headImg, shortDescription,
}) => {
  const classes = useStyles({ img: headImg });

  return (
    <Link to={`/product/${id}`} className={cn(classes.root, 'root')}>
      <div className={classes.description}>
        <div className={classes.productName}>{prodName}</div>
        <div className={classes.productDescription}>{shortDescription}</div>
      </div>
      <div className={classes.productImage} />
      <button type="button" className={classes.button}>
        <span>Get More</span>
      </button>
    </Link>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  prodName: PropTypes.string.isRequired,
  headImg: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Product;
