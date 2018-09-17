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
