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
          {this.props.formConfig.map((panel, i) => (
            <Panel key={panel.title} eventKey={i}>
              <Panel.Heading>
                <Panel.Title toggle>
                  {panel.title}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  {panel.fields.map(item => (
                    <Field
                      component={FieldMapper}
                      key={item.name}
                      {...item}
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
