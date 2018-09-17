/* eslint-disable prefer-destructuring */

const condition = ['WORKING', 'CONNECTIVITY_ISSUES', 'AVAILABILITY_ISSUES', 'UNKNOWN'];
condition.default = 'UNKNOWN';

const country = ['AUS', 'USA'];
country.default = 'USA';

const state = {};
state.AUS = ['ACT', 'JBT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];
state.USA = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
  'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO',
  'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA',
  'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

const enums = {
  condition,
  country,
  state
};

export default enums;
