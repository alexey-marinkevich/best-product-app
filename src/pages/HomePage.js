import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  layout: {
    maxWidth: '1920px',
    margin: '0 auto',
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default HomePage;
