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
