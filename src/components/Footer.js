import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '25px',
  },
  content: {
    fontSize: '16px',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <p className={classes.content}>All rights reserved 2019</p>
    </footer>
  );
};

export default Footer;
