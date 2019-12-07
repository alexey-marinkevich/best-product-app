import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '0 25px',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '20px',
  },
  formLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    position: 'relative',
    padding: '25px 0',
    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      bottom: '15px',
      width: '100%',
      height: '2px',
      backgroundColor: '#333',
      transform: 'translate(150px, 0)',
      transition: 'transform 0.3s',
    },
    '&:hover': {
      '&::after': {
        transform: 'translate(0, 0)',
      },
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/" className={classes.logo}>BEST PRODUCT</Link>
      <Link to="/suggest-form" className={classes.formLink}>Suggest Product</Link>
    </div>
  );
};

export default Header;
