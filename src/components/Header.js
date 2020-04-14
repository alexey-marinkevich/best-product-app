import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
    transform: 'translate(100%, 0)',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0 25px 0 0',
      width: '100%',
      transform: 'translate(0, 0)',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 25px',
    },
  },
  formLinkWrapper: {
    overflow: 'hidden',
    padding: '25px 0',
    [theme.breakpoints.down('sm')]: {
      overflow: 'visible',
    },
  },
  formLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: '300',
    position: 'relative',
    padding: '25px 0',
    marginRight: '25px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
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
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.formLinkWrapper}>
        <Link to="/suggest-form" className={classes.formLink}>
          Suggest Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
