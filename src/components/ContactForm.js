import React, { Component } from 'react';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      organisation: '',
      project: '',
      formErrors: {
        name: '',
        email: '',
        organisation: '',
        project: '',
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, organisation, project } = this.state;

      this.props.setContactDetails({
        name: name,
        email: email,
        organisation: organisation,
        project: project,
      });
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'organisation':
        formErrors.organisation = value.length < 1 ? 'Please enter an organisation.' : '';
        break;
      case 'project':
        formErrors.project = value.length < 1 ? 'Please enter a project' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className='ContactForm'>
        <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='col-6'>
              <input
                type='text'
                name='name'
                value={this.state.name}
                className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Name'
                noValidate
              ></input>
              {formErrors.name.length > 0 && (
                <span className='errorMessage'>{formErrors.name}</span>
              )}
            </div>

            <div className='col-6'>
              <input
                type='email'
                name='email'
                value={this.state.email}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Email'
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <input
                type='text'
                name='organisation'
                value={this.state.organisation}
                className={`form-control formInput ${
                  formErrors.organisation.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Organisation'
                noValidate
              ></input>
              {formErrors.organisation.length > 0 && (
                <span className='errorMessage'>{formErrors.organisation}</span>
              )}
            </div>

            <div className='col-6'>
              <input
                type='text'
                name='project'
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.project.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Project'
                noValidate
              ></input>
              {formErrors.project.length > 0 && (
                <span className='errorMessage'>{formErrors.project}</span>
              )}
            </div>
          </div>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;