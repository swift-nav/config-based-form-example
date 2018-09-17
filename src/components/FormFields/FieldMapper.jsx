import React from 'react';
import { allowedTypes } from '../../helpers';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import StateField from './StateField';
import TextareaField from './TextareaField';
import TextField from './TextField';

const FieldMapper = (args) => {
  switch (args.type) {
    case allowedTypes.checkbox:
      return <CheckboxField {...args} />;
    case allowedTypes.select:
      return <SelectField {...args} />;
    case allowedTypes.stateField:
      return <StateField {...args} />;
    case allowedTypes.text:
      return <TextField {...args} />;
    case allowedTypes.textarea:
      return <TextareaField {...args} />;
    default:
      console.warn(`Undefined field type ${args.type}`);
      return null;
  }
};

export default FieldMapper;
