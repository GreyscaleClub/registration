import {Form, Field} from 'simple-react-forms'
import React, {Component} from 'react';
// form from https://www.npmjs.com/package/simple-react-forms

class GreyForm extends React.Component {
  render() {
    return (
      <Form ref='simpleForm' className='form-body'>
        <Field
          className="form-input"
          name='First name'
          label='Enter first name'
          type='text'
        />
        <Field
          name='Last name'
          label='Enter last name'
          type='text'
        />
        <Field
          name='email'
          label='Enter email address'
          type='text'
        />
      </Form>
    );
  }
}


export default GreyForm;
