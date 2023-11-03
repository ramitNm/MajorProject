import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export const RegisterForm = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

 
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
    
      console.log('Form submitted:', formData);
    }
  };


  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px', backgroundColor: "rgb(0, 23, 140)" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">REGISTER</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput
                    label='Your Name'
                    id='name'
                    type='text'
                    name='name'
                    className='w-100 white-placeholder form-control'
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && <div className="text-danger error-message"><MDBIcon fas icon="exclamation-circle" /> {formErrors.name}</div>}
                </div>
                <div className="form-group">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput
                    label='Your Email'
                    id='email'
                    type='email'
                    name='email'
                    className='w-100 white-placeholder form-control'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && <div className="text-danger error-message"><MDBIcon fas icon="exclamation-circle" /> {formErrors.email}</div>}
                </div>
                <div className="form-group">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput
                    label='Password'
                    id='password'
                    type='password'
                    name='password'
                    className='w-100 white-placeholder form-control'
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {formErrors.password && <div className="text-danger error-message"><MDBIcon fas icon="exclamation-circle" /> {formErrors.password}</div>}
                </div>
                <div className="form-group">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput
                    label='Repeat your password'
                    id='confirmPassword'
                    type='password'
                    name='confirmPassword'
                    className='w-100 white-placeholder form-control'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {formErrors.confirmPassword && <div className="text-danger error-message"><MDBIcon fas icon="exclamation-circle" /> {formErrors.confirmPassword}</div>}
                </div>
                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
                <MDBBtn className='mb-4 register-button' size='lg' type='submit'>Register</MDBBtn>
              </form>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='\src\KeeProp Icons\image-removebg-preview (4).png' fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
