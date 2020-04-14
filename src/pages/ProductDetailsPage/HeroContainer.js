import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { IoIosArrowRoundBack, IoIosGlobe } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    display: 'flex',
    width: '100%',
    height: '80vh',
    maxHeight: '700px',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: '85vh',
    },
  },
  closeBtn: {
    position: 'absolute',
    left: '0',
    top: '0',
    fontSize: '70px',
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '14px 60px 60px 30px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#333',
    '&:hover': {
      transform: 'translate(-10px, 0)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 50px 6vh 4vw',
      color: '#fff',
    },
  },
  prodImg: (props) => ({
    width: '85%',
    height: '85%',
    alignSelf: 'flex-end',
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transform: 'scale(1)',
    transition: 'transform 10s, filter 1s',
    filter: 'brightness(0.8)',
    zIndex: '-100',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      alignSelf: 'flex-start',
    },
  }),
  siteUrl: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    padding: '40px 60px 20px 40px',
    fontSize: '30px',
    transform: 'scale(1)',
    color: '#fff',
    transition: '.2s .2s',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      bottom: '50px',
      padding: '20px',
      fontSize: '40px',
      transformOrigin: 'center left',
      transform: 'scale(1) translate(-50%, 0)',
    },
    '&:hover': {
      transform: 'scale(1.2)',
      transition: '.2s',
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(1.3) translate(-50%, 0)',
      },
      '&::before': {
        transform: 'translate(-5px, 0) scale(0.9)',
        transition: '.2s .2s',
      },
    },
    '&::before': {
      content: "'Explore site'",
      position: 'absolute',
      fontSize: '15px',
      left: '75px',
      top: '47px',
      whiteSpace: 'nowrap',
      transform: 'translate(0, 55px)',
      transition: '.2s',
      [theme.breakpoints.down('sm')]: {
        content: "''",
      },
    },
  },
}));

const propTypes = {
  heroImg: PropTypes.string,
  prodUrl: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

const defaultProps = {
  heroImg: null,
  prodUrl: null,
};

const HeroContainer = ({ heroImg, prodUrl, handleClose }) => {
  const classes = useStyles({ img: heroImg });

  return (
    <div className={classes.heroContainer}>
      <button className={classes.closeBtn} type="button" onClick={handleClose}>
        <IoIosArrowRoundBack htmlFor={classes.closeBtn} />
      </button>
      <div className={classes.prodImg} />
      <a href={prodUrl} className={classes.siteUrl} target="_blank" rel="noopener noreferrer">
        <IoIosGlobe htmlFor={classes.siteUrl} />
      </a>
    </div>
  );
};

HeroContainer.propTypes = propTypes;

HeroContainer.defaultProps = defaultProps;

export default HeroContainer;
