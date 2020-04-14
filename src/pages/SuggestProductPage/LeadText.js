import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  leadText: {
    fontSize: '20px',
    color: '#333',
    width: '500px',
    fontWeight: '100',
    textAlign: 'right',
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: '120px',
    zIndex: '-9999',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      marginRight: '80px',
      width: '490px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '&::before': {
      content: "'Suggest product'",
      fontSize: '95px',
      fontWeight: '800',
      color: '#e8e8e8',
      position: 'absolute',
      writingMode: 'vertical-lr',
      whiteSpace: 'nowrap',
      top: '0',
      right: '-120px',
      [theme.breakpoints.down('sm')]: {
        top: '4px',
        fontSize: '80px',
        marginRight: '20px',
      },
    },
  },
}));

const LeadText = () => {
  const classes = useStyles();
  return (
    <p className={classes.leadText}>
      Place where you can suggest interesting and good quality products of small or less popular
      companies to share with other people and get to know about it more range of pepople
    </p>
  );
};

export default LeadText;
