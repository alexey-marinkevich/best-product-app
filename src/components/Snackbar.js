import React from 'react';
// import PropTypes from 'prop-types';

import { Snackbar as MuiSnackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Snackbar = (type, severity, message, onClose) => (
  <MuiSnackbar
    open={type}
    autoHideDuration={6000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  >
    <MuiAlert onClose={onClose} severity={severity} variant="filled" elevation={6}>
      {/* Suggestion is successfully submited */}
      {message}
    </MuiAlert>
  </MuiSnackbar>
);

export default Snackbar;

// Snackbar.propTypes = {
//   type: PropTypes.string.isRequired,
// }
