import { API } from 'aws-amplify';

const initState = {
  error: false,
  isLoading: false,
  prodName: '',
  prodUrl: '',
  headImg: '',
  shortDescription: '',
  fullDescription: '',
  imageGalleryInput: '',
  gallery: ['https://atoms.imgix.net/web/Atoms-Quarter-Size-Image-Thumbnail.png?w=873&auto=format&dpr=1', 'https://atoms.imgix.net/web/Atoms-Quarter-Size-Image-Thumbnail.png?w=873&auto=format&dpr=1'],
};

const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
const FLUSH_FORM_FIELD = 'FLUSH_FORM_FIELD';
const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
const SET_ERROR = 'SET_ERROR';

export const updateFormFieldAction = (fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: {
    [fieldName]: value,
  },
});

export const flushFieldsAction = () => ({ type: FLUSH_FORM_FIELD });
export const setLoadingStatusAction = (status) => ({ type: SET_LOADING_STATUS, payload: status });
export const setErrorAction = (error) => ({ type: SET_ERROR, payload: error });

export const suggestProductAction = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingStatusAction(true));
    const state = getState();
    const {
      prodName,
      prodUrl,
      headImg,
      shortDescription,
      fullDescription,
      gallery,
    } = state.form;
    const apiName = 'products';
    const path = '/product';
    const myInit = {
      body: {
        prodName,
        prodUrl,
        headImg,
        shortDescription,
        fullDescription,
        gallery,
      },
    };
    await API.post(apiName, path, myInit);
    dispatch(setLoadingStatusAction(false));
  } catch (err) {
    dispatch(setLoadingStatusAction(false));
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case FLUSH_FORM_FIELD:
      return initState;
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
