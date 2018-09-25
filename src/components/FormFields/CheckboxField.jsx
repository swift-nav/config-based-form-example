// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox, FormGroup } from 'react-bootstrap';

const CheckboxField = ({
  input,
  label
}) => (
  <FormGroup>
    <Checkbox {...input} inline>
      <strong>{label || input.name}</strong>
    </Checkbox>
  </FormGroup>
);

CheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string
};

CheckboxField.defaultProps = {
  label: ''
};

export default CheckboxField;
