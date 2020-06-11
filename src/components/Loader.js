import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  loaderWrapper: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
