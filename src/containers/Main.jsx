// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import React from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import { StationForm } from '../components';

const Main = () => (
  <Grid className="main">
    <PageHeader>Full Stack Form Example</PageHeader>
    <StationForm />
  </Grid>
);

export default Main;
