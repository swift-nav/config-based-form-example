import _ from 'lodash';

export const allowedTypes = {
  checkbox: 'checkbox',
  select: 'select',
  stateField: 'stateField',
  text: 'text',
  textarea: 'textarea'
};

export const requiredFields = ['default', 'label', 'type'];

export const checkConfigObj = (obj, property, value, name) => {
  // RUN TESTS TO ENSURE VALID FIELD DEFINITIONS IN DEV/TEST MODES:
  if (obj[property] !== undefined) {
    throw new Error(`Found redundant definition for ${property} in ${name} config`);
  }
  // ERROR IF CONFIG OBJECT IS MISSING A REQUIRED FIELD
  requiredFields.forEach((field) => {
    if (value[field] === undefined) {
      throw new Error(`Attempting to define field ${property} without value for ${field}`);
    }
  });

  if (value.validate !== undefined) {
    // CHECK THAT validate, IF IT EXISTS, IS AN ARRAY
    if (!Array.isArray(value.validate)) {
      throw new Error(`Definition for field ${property} has invalid property validate`);
    }

    // CHECK THAT THE DEFAULT VALUE PROVIDED PASSES VALIDATION
    value.validate.forEach((func) => {
      if (func(value.default) === 'error') {
        throw new Error(`Default value ${value.default} for ${property} does not pass validation`);
      }
    });
  }

  // CHECK THAT THE INPUT TYPE PROVIDED IS VALID
  if (!allowedTypes[value.type]) {
    throw new Error(`Invalid input type ${value.type} for property ${property}`);
  }


  // CHECK THAT SELECT FIELDS HAVE options ARRAY
  if (value.type === allowedTypes.select && value.options === undefined) {
    throw new Error(`Missing property 'options' for field ${property} of type select`);
  } else if ((value.type === 'stateField') && value.optionMap === undefined) {
    throw new Error(`Missing property 'optionMap' for field ${property}`);
  }
  return true;
};


export const makeType = name => new Proxy({}, {
  get: (obj, property) => {
    if (property === 'Empty') {
      return _.mapValues(obj, () => null);
    }
    if (property === 'Default') {
      return _.mapValues(obj, field => field.default);
    }
    if ((process.mode === 'development' || process.mode === 'test') && obj[property] === undefined) {
      throw new Error(`Attempting to access undefined field '${property}' in config ${name}`);
    }
    return obj[property];
  },
  set: (obj, property, value) => {
    if (process.mode === 'development' || process.mode === 'test') {
      checkConfigObj(obj, property, value, name);
    }
    Reflect.set(obj, property, { ...value, name: property });
    return true;
  }
});