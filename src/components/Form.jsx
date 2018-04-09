import React, { Component } from 'react';
import validate from '../helpers/validate';

class FormValidate extends Component {
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate() {
    if (this.needUpdate) {
      delete this.needUpdate;
      return true;
    }

    return false;
  }

  onFieldChange(evt) {
    const { fields } = this.state;
    const element = evt.target;
    const { name, type } = element;
    let value = element.value;

    if (type === 'checkbox') {
      value = element.checked;
    }

    // get field and set field value
    const field = fields[name];
    field.value = value;

    // validate and set field, needUpdate
    const { field: validatedField , needUpdate } = validate(field);
    fields[name] = validatedField;
    this.needUpdate = needUpdate;

    // error catch:
    // field[fieldName].error = element of field.validates
    this.setState({
      fields,
    });
  }

  validateForm() {
    const { fields } = this.state;
    const fieldNames = Object.keys(fields);
    let isValid = true;

    fieldNames.forEach(fieldName => {
      const field = fields[fieldName];
      const { field: validatedField , needUpdate } = validate(field);
      if (validatedField.error) {
        isValid = false;
      }

      fields[fieldName] = field;
      if (needUpdate) {
        this.needUpdate = needUpdate;
      }
    });

    this.setState({
      fields,
    });

    return isValid;
  }
}

export default FormValidate;