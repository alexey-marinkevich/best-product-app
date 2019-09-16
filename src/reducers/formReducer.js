import axios from 'axios';

const initState = {
  error: null,
  isLoading: false,
  productName: 'Monument Valley',
  productHeadImage:
    'https://images.ctfassets.net/gw5wr8vzz44g/5GtxNkxKOCScNl9ybSl3lG/477f02ca7e20c94c257449bb7582cbce/ustwo-casestudy-monument-valley-games.jpg?w=4000&q=70&fm=jpg',
  shortDescription:
    'Feel good, from the ground up. Atoms are designed to be your ideal everyday shoes. They are beautiful in their simplicity, with clean lines and thoughtful details.',
  fullDescription:
    'Feel good, from the ground up. Atoms are designed to be your ideal everyday shoes. They are beautiful in their simplicity, with clean lines and thoughtful details.Feel good, from the ground up. Atoms are designed to be your ideal everyday shoes. They are beautiful in their simplicity, with clean lines and thoughtful details.Feel good, from the ground up. Atoms are designed to be your ideal everyday shoes. They are beautiful in their simplicity, with clean lines and thoughtful details.',
  imageGalleryInput: '',
  gallery: [
    'https://cdn.vox-cdn.com/thumbor/YKin5bR8at4C-CBHHlIE_rB9Nr0=/0x0:1280x720/1200x675/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/55159829/12.0.jpg',
    'https://www.monumentvalleygame.com/media/2-dff282b9.jpg',
    'http://cdn0.sbnation.com/assets/4155547/monumentvalley_gdc_long.png',
  ],
};

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
