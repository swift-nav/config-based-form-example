// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

const TextField = ({
  input,
  label,
  meta: { touched, error, warning },
  placeholder
}) => (
  <FormGroup validationState={
    (touched && ((error && 'error') || (warning && 'warning')))
    || null}
  >
    <ControlLabel htmlFor={input.name}>{label || input.name}</ControlLabel>
    <FormControl {...input} placeholder={placeholder} type="text" />
  </FormGroup>
);

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string
};

TextField.defaultProps = {
  label: '',
  placeholder: ''
};

export default TextField;
