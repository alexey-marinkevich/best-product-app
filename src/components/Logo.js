import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: '100px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, 0)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(0, 0)',
      transition: 'transform 1s 1s',
      '&:hover': {
        transform: 'translate(20%, 0)',
        transition: 'transform .3s',
      },
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      '&:hover': {
        transform: 'translate(0, 0)',
      },
    },
  },
  logo: {
    display: 'flex',
    position: 'relative',
    color: '#333',
    fontSize: '24px',
    fontWeight: '300',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transform: 'translate(0, 0) rotate(45deg)',
    transition: 'transform .7s .9s',
    '.logoContainer:hover &': {
      transform: 'translate(14%, -30%) rotate(0)',
      transition: 'transform .3s',
    },
    [theme.breakpoints.down('xs')]: {
      '.logoContainer:hover &': {
        transform: 'translate(0, 0) rotate(45deg)',
      },
    },
  },
  firstWord: {
    overflow: 'hidden',
    width: '14px',
    transition: 'width .3s .3s, color 2s 1.5s',
    '.logoContainer:hover &': {
      width: '50px',
      color: '#ff2d2d',
      transition: 'width .3s .6s, color 1s 1s',
    },
    [theme.breakpoints.down('xs')]: {
      '.logoContainer:hover &': {
        width: '14px',
        color: 'inherit',
      },
    },
    '&::after': {
      content: "'est'",
      color: '#333',
      left: '0',
      top: '0',
    },
  },
  secondWord: {
    overflow: 'hidden',
    width: '14px',
    transform: 'translate(0, 0)',
    transition: 'width .3s .3s, transform .3s .6s, color 2s 1.5s',
    '.logoContainer:hover &': {
      width: '85px',
      color: '#ff2d2d',
      transform: 'translate(-35px, 20px)',
      transition: 'transform .3s .3s, width .3s .6s, color 1s 1.3s',
    },
    [theme.breakpoints.down('xs')]: {
      '.logoContainer:hover &': {
        width: '14px',
        color: 'inherit',
        transform: 'none',
      },
    },
    '&::after': {
      content: "'roduct'",
      color: '#333',
      left: '0',
      top: '0',
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={cn(classes.logoContainer, 'logoContainer')}>
      <Link to="/" className={classes.logo}>
        <div className={classes.firstWord}>b</div>
        <div className={classes.secondWord}>p</div>
      </Link>
    </div>
  );
};

export default Logo;
