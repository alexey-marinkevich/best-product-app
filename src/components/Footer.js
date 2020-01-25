import React from 'react';

import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { GoLogoGithub } from 'react-icons/go';
import { FiGithub } from 'react-icons/fi';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '80px 70px 70px 70px',
    backgroundColor: '#fff',
  },
  content: {
    fontSize: '16px',
  },
  gitHubLink: {
    position: 'relative',
    fontSize: '50px',
    color: '#333',
    transform: 'translate(0, 0)',
    transition: '.3s',
    '&:hover': {
      transform: 'translate(50%, 0)',
    },
  },
  gitLogo: {
    transform: 'translate(0, 0)',
    backgroundColor: '#fff',
    position: 'absolute',
    transition: '.3s',

    '.gitHubLink:hover &': {
      transform: 'translate(-100%, 0)',
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <a
        href="https://github.com/InkKoodo/best-product-app"
        className={cn(classes.gitHubLink, 'gitHubLink')}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.gitLogo}>
          <FiGithub />
        </div>
        <GoLogoGithub />
      </a>
    </footer>
  );
};

export default Footer;
