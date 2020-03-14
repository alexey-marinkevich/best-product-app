const initState = {
  formFields: {
    prodName: '',
    prodUrl: '',
    headImg: '',
    shortDescription: '',
    fullDescription: '',
  },
  previewGallery: [
    'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118',
    'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826',
    'https://cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138',
  ],
  isFormPreview: false,
};

const SET_FORM_FIELDS = 'SET_FORM_FIELDS';
const SET_GALLERY = 'SET_GALLERY';
const IS_FORM_PREVIEW = 'IS_FORM_PREVIEW';

export const setFormFieldsAction = (formFields) => ({
  type: SET_FORM_FIELDS,
  payload: formFields,
});

export const setGalleryAction = (data) => ({ type: SET_GALLERY, payload: data });

export const setFormPreviewAction = (status) => ({ type: IS_FORM_PREVIEW, payload: status });

export default (state = initState, action) => {
  switch (action.type) {
    case SET_FORM_FIELDS:
      return {
        ...state,
        formFields: action.payload,
      };
    case SET_GALLERY:
      return {
        ...state,
        previewGallery: action.payload,
      };
    case IS_FORM_PREVIEW:
      return {
        ...state,
        isFormPreview: action.payload,
      };

    default:
      return state;
  }
};
