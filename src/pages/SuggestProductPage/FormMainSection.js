import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { setFormFieldAction } from '../../reducers/formReducer';
import Input from '../../components/Input';

const useStyles = makeStyles((theme) => ({
  mainDataTopSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  formTopItem: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '47%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const propTypes = {
  isLoading: PropTypes.bool,
  formFields: PropTypes.shape({
    prodName: PropTypes.string,
    prodUrl: PropTypes.string,
    headImg: PropTypes.string,
    shortDescription: PropTypes.string,
    fullDescription: PropTypes.string,
  }).isRequired,
  setFormField: PropTypes.func.isRequired,
};

const defaultProps = {
  isLoading: false,
};

const FormMainSection = ({ isLoading, formFields, setFormField }) => {
  const classes = useStyles();

  const fields = {
    main: [
      {
        name: 'prodName',
        label: 'Product Name',
        className: classes.formTopItem,
      },
      {
        name: 'prodUrl',
        label: 'Product Site',
        helperText: 'Add origin site URL',
        className: classes.formTopItem,
      },
      {
        name: 'headImg',
        label: 'Main Image',
        placeholder: 'Paste URL',
        helperText: 'Add image that clearly shows the product is',
        className: classes.formTopItem,
      },
    ],
    description: [
      {
        name: 'shortDescription',
        label: 'Short Description',
        placeholder: '250 symbols max',
        helperText: 'Will be available in product preview',
        inputProps: { maxLength: 250 },
        multiline: true,
      },
      {
        name: 'fullDescription',
        label: 'Full Description',
        helperText: 'Provide full description here',
        multiline: true,
      },
    ],
  };
  const renderField = (field) => (
    <Input
      required
      key={field.label}
      value={formFields[field.name]}
      onChange={(e) => setFormField(field.name, e.target.value)}
      margin="normal"
      disabled={isLoading}
      {...field}
    />
  );
  const fieldNodes = {
    main: fields.main.map(renderField),
    description: fields.description.map(renderField),
  };
  return (
    <>
      <div className={classes.mainDataTopSection}>{fieldNodes.main}</div>
      {fieldNodes.description}
    </>
  );
};

const mapStateToProps = (state) => ({
  formFields: state.form.formFields,
  isLoading: state.form.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  setFormField: (formName, formField) => dispatch(setFormFieldAction(formName, formField)),
});

FormMainSection.propTypes = propTypes;
FormMainSection.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(FormMainSection);
