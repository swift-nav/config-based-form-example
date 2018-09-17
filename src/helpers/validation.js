import _ from 'lodash';
/*  TO DEFINE VALIDATION RULES FOR FIELDS, ADD A REGEX EXPRESSION TO THE
    RULES OBJECT. NOTE THAT FIELDS MAY HAVE MULTIPLE TESTS.
*/

const rules = {
  /*  COORDINATES:
  - Must contain exactly one '.' character
  - First character may be '-' to indicate a negative number
  - All remaining characters must be numeric
  - Must have at least one numeric character on left side of the decimal
  - Must have at least mm precision
  */
  coords: /^-{0,1}[0-9]{1,}\.[0-9]{3,}$/
};

const reduxFormValidation = passedRegexTest => (passedRegexTest ? undefined : 'error');

// MAP REGEX EXPRESSIONS TO TEST FUNCTIONS (NOTE THAT '' AND null VALUES WILL NOT BE
// TESTED AGAINST REGEX EXPRESSIONS BY DEFAULT. TO REQUIRED THAT A FIELD BE NON-EMPTY,
// INCLUDE validate.nonEmpty IN THE LIST OF TESTS FOR THAT FIELD).
const validate = {};
_.forOwn(rules, (regex, key) => {
  validate[key] = value => reduxFormValidation(value === '' || value === null || regex.test(value));
});
validate.nonEmpty = value => reduxFormValidation(value !== '' && value !== null);

export default validate;
