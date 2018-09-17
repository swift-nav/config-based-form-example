import stationType from './stationType';

const section = (title, configsArr) => ({
  fields: configsArr,
  title
});

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
    stationType.state,
    stationType.latitude,
    stationType.altitude,
    stationType.longitude
  ])
];

export default stationForm;
