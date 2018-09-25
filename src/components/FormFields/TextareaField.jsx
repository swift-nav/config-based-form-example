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

const TextareaField = ({
  input,
  label,
  placeholder
}) => (
  <FormGroup>
    <ControlLabel htmlFor={input.name}>{label || input.name}</ControlLabel>
    <FormControl {...input} componentClass="textarea" placeholder={placeholder} />
  </FormGroup>
);

TextareaField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

TextareaField.defaultProps = {
  label: '',
  placeholder: ''
};

export default TextareaField;
