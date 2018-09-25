// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import React from 'react';
import { allowedTypes } from '../../helpers';
import { CheckboxField, SelectField, TextareaField, TextField } from './index';

const FieldMapper = (props) => {
  switch (props.type) {
    case allowedTypes.checkbox:
      return <CheckboxField {...props} />;
    case allowedTypes.select:
      return <SelectField {...props} />;
    case allowedTypes.text:
      return <TextField {...props} />;
    case allowedTypes.textarea:
      return <TextareaField {...props} />;
    default:
      return null;
  }
};

export default FieldMapper;
