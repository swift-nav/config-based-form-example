// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import { reduxForm } from 'redux-form';
import { stationForm, stationType } from '../config';
import { ReduxPanelForm } from './FormTemplates';

/*
THE BEAUTY OF OUR FORM ABSTRACTION IS THAT WE NO LONGER NEED TO WRITE ANY
JSX CODE TO BUILD SPECIFIC FORMS. WE MERELY IMPORT THE RELEVENT CONFIGURATION
FILE, WRAP IT WITH reduxForm, AND PAIR IT WITH THE FORM TEMPLATE OF OUR CHOOSING.
FIELDS THAT MUST BE PROVIDED TO reduxForm INCLUDE THE FOLLOWING:

  form: A UNIQUE NAME FOR THE FORM
  onSubmit: A CALLBACK FUNCTION UPON SUBMISSION OF THE FORM
  formConfig: THE CONFIGURATION OBJECT FOR OUR FORM, REQUIRED BY OUR TEMPLATE,
  BUT NOT BY redux-form ITSELF

IN THE EXAMPLE BELOW, WE ARE ALSO PASSING IN INITIAL VALUES FOR THE FORM. THE
PROXY WRAPPED AROUND OUR CONFIGURATION OBJECT MAKES THIS TASK A SIMPLE ONE-LINER!
*/

const StationForm = reduxForm({
  form: 'stationForm',
  formConfig: stationForm,
  initialValues: stationType.Default,
  onSubmit: values => console.log(values)
})(ReduxPanelForm);

export default StationForm;


/*
TYPICALLY, AS IN THE CASE OF FORMS THAT PERFORM EDITS, YOU MAY NEED TO GENERATE
INITIAL VALUES FROM THE REDUX STATE. IN THIS CASE, YOU WILL NEED TO WRAP YOUR
FORM USING THE CONNECT FUNCTION FROM REACT-REDUX. REFER TO THE EXAMPLE BELOW:

import { connect } from 'react-redux';

const StationForm = connect(state => ({
  // MAP STATE TO FORM VALUES BELOW
  initialValues: state.formValues,
}))(reduxForm({
  form: 'stationForm',
  formConfig: stationForm,
  onSubmit: values => console.log(values)
})(ReduxPanelForm));

IF YOU ARE MAKING AN API CALL FOR DATA AND DO NOT INITIALLY HAVE THE
VALUES TO POPULATE YOUR FORM, YOU MAY PROVIDE DEFAULT VALUES AT FIRST AND ENABLE
THE COMPONENT TO REINITIALIZE ITSELF ONCE DATA IS PROVIDED. SETTING
enableReinitialize TO true WILL REINITIALIZE THE FORM EVERY TIME THE VALUE OF
initialValues CHANGES:

const StationForm = connect(state => ({
  // INITIALIZE WITH REDUX STATE IF POSSIBLE. PROVIDE DEFAULTS OTHERWISE.
  initialValues: state.formValues ? state.formValues : stationField.Default
}))(reduxForm({
  enableReinitialize: true,
  form: 'stationForm',
  formConfig: stationForm,
  onSubmit: values => console.log(values)
})(ReduxPanelForm));

FOR HANDLING OTHER USE CASES, REFER TO THE FOLLOWING redux-form DOCUMENTATION:
https://redux-form.com/7.4.2/docs/api/reduxform.md/
*/
