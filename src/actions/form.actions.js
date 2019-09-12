export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const FLUSH_FORM_FIELD = 'FLUSH_FORM_FIELD';

export const updateFormField = (fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: {
    [fieldName]: value,
  },
});

export const flushFields = () => ({ type: FLUSH_FORM_FIELD });
