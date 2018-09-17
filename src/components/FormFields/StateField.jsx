import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { formValues, change } from 'redux-form';

class StateField extends Component {
  componentDidUpdate(oldProps) {
    if (oldProps.country !== this.props.country && this.props.input.value) {
      if (
        !this.props.country
        || this.props.optionMap[this.props.country].indexOf(this.props.input.value) < 0
      ) {
        this.props.meta.dispatch(change(this.props.meta.form, 'state', null));
      }
    }
  }

  render() {
    if (!this.props.country) {
      return (
        <FormGroup>
          <ControlLabel htmlFor={this.props.input.name}>
            {this.props.label || this.props.input.name}
          </ControlLabel>
          <FormControl {...this.props.input} componentClass="select">
            <option value="">Select country to see options...</option>
          </FormControl>
        </FormGroup>
      );
    }
    return (
      <FormGroup>
        <ControlLabel htmlFor={this.props.input.name}>
          {this.props.label || this.props.input.name}
        </ControlLabel>
        <FormControl {...this.props.input} componentClass="select">
          <option value="">{this.props.placeholder}</option>
          {this.props.optionMap[this.props.country].map(value => <option key={`${this.props.input.name}-${value}`} value={value}>{value}</option>)}
        </FormControl>
      </FormGroup>
    );
  }
}

StateField.propTypes = {
  country: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired
  }).isRequired,
  optionMap: PropTypes.object.isRequired,
  placeholder: PropTypes.string
};

StateField.defaultProps = {
  country: '',
  label: '',
  placeholder: ''
};

export default formValues('country')(StateField);
