// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

/*  TO DEFINE A NEW API TYPE, CALL THE FUNCTION makeType AS FOLLOWS:

      const someType = makeType('nameYourTypeNameHere');

    someType IS NOW PROXIED. YOU MAY DEFINE PROPERTIES, BUT YOU WILL
    SEE BUILD ERRORS IN DEVELOPMENT AND TEST MODES IF YOU DEFINE FIELDS INCORRECTLY.

    EXAMPLE DEFINITION:

      someType.someProperty = {
        default: false,
        label: 'active',
        type: allowedTypes.checkbox
      }

    NOTE: THE PROXY WRAPPING someType WILL SET THE name KEY AUTOMATICALLY:
      someType.someProperty.name = 'someProperty';
    NOTE: PROPERTY NAMES SHOULD MATCH CORRESPONDING PROPERTY NAMES IN THE api.

    PROPERTIES OF CONFIGURATION OBJECTS ********************************************

      default (REQUIRED): DEFAULT VALUE FOR FIELD

      label (REQUIRED): THE HUMAN-READABLE NAME OF THE FIELD (WHAT USERS WILL SEE)

      name (AUTO-GENERATED): NAME OF THE FIELD, WILL BE UNIQUE AND MATCH
        THE OBJECT KEY IN config

      placeholder (OPTIONAL): IF FORM INPUT BOXES FOR THIS FIELD NEED TO HAVE A
      PLACEHOLDER THAT DIFFERS FROM label, PROVIDE THAT HERE. THIS FIELD SHOULD
      BE A STRING.

      type (REQUIRED): CURRENTLY, CAN BE ONE OF THE FOLLOWING:
        text      FOR STRINGS AND NUMBERS
        textarea  FOR LARGE BLOCKS OF INPUT TEXT
        checkbox  FOR BOOLEANS
        select    FOR ENUMERABLE STRING FIELDS

      validate: IF THIS FIELD REQUIRES FORM VALIDATION, PROVIDE AN ARRAY OF VALIDATION
      FUNCTIONS HERE. THE FUNCTION MUST BE DEFINED IN src/helpers/validation.js. SEE
      src/helpers/validation.js FOR MORE DETAILS.

      options (REQUIRED FOR SELECT FIELDS): ARRAY OF ALLOWED VALUES FOR FIELD.
*/

// THESE IMPORTS ARE REQUIRED FOR MOST TYPES *******************************************************
import { allowedTypes, validate, makeType } from '../helpers';

const stationType = makeType('station');

// DEFINE STATION FIELDS BELOW *********************************************************************

stationType.active = {
  default: true,
  label: 'Active?',
  type: allowedTypes.checkbox
};

stationType.altitude = {
  default: null,
  label: 'Altitude',
  placeholder: 'meters above sea level',
  type: allowedTypes.text,
  validate: [validate.coords]
};

stationType.condition = {
  default: 'UNKNOWN',
  label: 'Condition',
  options: ['WORKING', 'CONNECTIVITY_ISSUES', 'AVAILABILITY_ISSUES', 'UNKNOWN'],
  placeholder: 'select...',
  type: allowedTypes.select
};

stationType.country = {
  default: 'USA',
  label: 'Country',
  options: ['AUS', 'USA'],
  type: allowedTypes.select
};

stationType.latitude = {
  default: null,
  label: 'Latitude',
  placeholder: 'degrees N of equator',
  type: allowedTypes.text,
  validate: [validate.coords]
};

stationType.longitude = {
  default: null,
  label: 'Longitude',
  placeholder: 'degrees E of Prime Meridian',
  type: allowedTypes.text,
  validate: [validate.coords]
};

stationType.name = {
  default: null,
  label: 'Name',
  type: allowedTypes.text
};

stationType.notes = {
  default: null,
  label: 'Notes',
  type: allowedTypes.textarea
};

export default stationType;
