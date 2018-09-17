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
