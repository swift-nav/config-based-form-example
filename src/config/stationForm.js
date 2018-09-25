// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import stationType from './stationType';

const section = (title, fields) => ({ fields, title });

const stationForm = [
  section('General', [
    stationType.name,
    stationType.notes
  ]),
  section('Status', [
    stationType.active,
    stationType.condition
  ]),
  section('Location', [
    stationType.country,
    stationType.latitude,
    stationType.altitude,
    stationType.longitude
  ])
];

export default stationForm;
