import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

const SelectField = ({
  input,
  label,
  options,
  placeholder
}) => (
  <FormGroup>
    <ControlLabel htmlFor={input.name}>{label || input.name}</ControlLabel>
    <FormControl {...input} componentClass="select">
      <option value="">{placeholder}</option>
      {options.map(value => <option key={`${input.name}-${value}`} value={value}>{value}</option>)}
    </FormControl>
  </FormGroup>
);

SelectField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string
};

SelectField.defaultProps = {
  label: '',
  placeholder: ''
};

export default SelectField;
