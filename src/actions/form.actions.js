import axios from 'axios';

export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const FLUSH_FORM_FIELD = 'FLUSH_FORM_FIELD';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_ERROR = 'SET_ERROR';

export const updateFormField = (fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: {
    [fieldName]: value,
  },
});

export const flushFields = () => ({ type: FLUSH_FORM_FIELD });
export const setLoadingStatus = status => ({ type: SET_LOADING_STATUS, payload: status });
export const setError = error => ({ type: SET_ERROR, payload: error });

export const submitForm = () => async (dispatch, getState) => {
  dispatch(setError(null));
  dispatch(setLoadingStatus(true));

  try {
    const { form } = getState();
    const { fullDescription, gallery, productHeadImage, productName, shortDescription } = form;
 
    const body = {
      fullDescription,
      gallery,
      productHeadImage,
      productName,
      shortDescription,
    };

    const response = await axios.post('http://localhost:3001/create-product', body);

    console.log(response);

    dispatch(flushFields());
  } catch (e) {
    dispatch(setError('Failed to submit form'));
  }

  dispatch(setLoadingStatus(false));
};
