import { API } from 'aws-amplify';

const initState = {
  formFields: {
    prodName: '',
    prodUrl: '',
    headImg: '',
    shortDescription: '',
    fullDescription: '',
  },
  productGallery: {
    input: '',
    gallery: [
      'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118',
      'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
      'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138',
    ],
  },
  isLoading: false,
  isFormPreview: false,
  isSnackOpen: false,
  IsRequestError: false,
};

const SET_FORM_FIELD = 'SET_FORM_FIELD';
const SET_GALLERY_INPUT = 'SET_GALLERY_INPUT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_IS_SNACK_OPEN = 'SET_IS_SNACK_OPEN';
const SET_IS_REQUEST_ERROR = 'SET_IS_REQUEST_ERROR';
const SET_GALLERY = 'SET_GALLERY';
const SET_IS_FORM_PREVIEW = 'SET_IS_FORM_PREVIEW';
const FLUSH_ACTION = 'FLUSH_ACTION';

export const setGalleryInputAction = (inputText) => ({ type: SET_GALLERY_INPUT, payload: inputText });
export const setIsLoadingAction = (status) => ({ type: SET_IS_LOADING, payload: status });
export const setIsSnackOpenAction = (status) => ({ type: SET_IS_SNACK_OPEN, payload: status });
export const setIsRequestErrorAction = (status) => ({ type: SET_IS_REQUEST_ERROR, payload: status });
export const setFormFieldAction = (formName, formField) => ({
  type: SET_FORM_FIELD,
  payload: {
    formName,
    formField,
  },
});
export const setGalleryAction = (data) => ({ type: SET_GALLERY, payload: data });
export const setFormPreviewAction = (status) => ({ type: SET_IS_FORM_PREVIEW, payload: status });
export const setFlushAction = () => ({ type: FLUSH_ACTION, payload: initState.formFields });

export const submitFormAction = (history, autoHideTime) => async (dispatch, getState) => {
  const state = getState();
  const apiName = 'products';
  const path = '/product';
  const myInit = {
    body: {
      ...state.form.formFields,
      gallery: state.form.productGallery.gallery,
    },
  };
  try {
    dispatch(setIsLoadingAction(true));
    await API.post(apiName, path, myInit);
    dispatch(setGalleryAction([]));
    dispatch(setIsLoadingAction(false));
    dispatch(setIsRequestErrorAction(false));
    dispatch(setIsSnackOpenAction(true));
    setTimeout(() => {
      dispatch(setFormPreviewAction(false));
      history.push('/');
    }, autoHideTime + 500);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(err);
    }
    dispatch(setIsRequestErrorAction(true));
    dispatch(setIsSnackOpenAction(true));
    dispatch(setIsLoadingAction(false));
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [action.payload.formName]: action.payload.formField,
        },
      };
    case SET_GALLERY:
      return {
        ...state,
        productGallery: {
          ...state.productGallery,
          gallery: action.payload,
        },
      };
    case SET_IS_FORM_PREVIEW:
      return {
        ...state,
        isFormPreview: action.payload,
      };
    case SET_GALLERY_INPUT:
      return {
        ...state,
        productGallery: {
          ...state.productGallery,
          input: action.payload,
        },
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_IS_SNACK_OPEN:
      return {
        ...state,
        isSnackOpen: action.payload,
      };
    case SET_IS_REQUEST_ERROR:
      return {
        ...state,
        isRequestError: action.payload,
      };
    case FLUSH_ACTION:
      return {
        ...state,
        formFields: action.payload,
      };

    default:
      return state;
  }
};
