// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

/* eslint-disable prefer-destructuring */

const condition = ['WORKING', 'CONNECTIVITY_ISSUES', 'AVAILABILITY_ISSUES', 'UNKNOWN'];
condition.default = 'UNKNOWN';

const country = ['AUS', 'USA'];
country.default = 'USA';

const enums = {
  condition,
  country
};

export default enums;
