// Copyright (C) 2018 Swift Navigation Inc.
//
// Contact: Swift Navigation <dev@swiftnav.com>
//
// This source is subject to the license found in the file 'LICENSE'
// which must be be distributed together with this source. All other
// rights reserved.

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form, Panel, PanelGroup } from 'react-bootstrap';
import { Field } from 'redux-form';
import { FieldMapper } from '../FormFields';

class ReduxPanelForm extends Component {
  static propTypes = {
    form: PropTypes.string.isRequired,
    formConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    submitFailed: PropTypes.bool.isRequired,
    submitSucceeded: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      activeKey: '0'
    };
  }

  onPanelSelect = (activeKey) => {
    this.setState({ activeKey });
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <PanelGroup
          accordion
          activeKey={this.state.activeKey}
          id={`${this.props.form}-panel-group`}
          onSelect={this.onPanelSelect}
        >
          {this.props.formConfig.map((section, i) => (
            <Panel key={section.title} eventKey={i}>
              <Panel.Heading>
                <Panel.Title toggle>
                  {section.title}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  {section.fields.map(field => (
                    <Field
                      component={FieldMapper}
                      key={field.name}
                      {...field}
                    />
                  ))}
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          ))}
        </PanelGroup>
        {this.props.invalid && this.props.submitFailed ?
          <p className="text-danger">Please fix highlighted errors.</p>
          : null}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default ReduxPanelForm;
