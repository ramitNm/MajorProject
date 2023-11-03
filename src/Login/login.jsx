import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Burger_2 } from "../Burger_2/burger_2";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      
      const simulatedLoginSuccess = true;
  
      if (simulatedLoginSuccess) {
        alert('Login successful! Redirecting...'); 

      } else {
        alert('Login failed. Please check your credentials.'); 
      }
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard style={{ backgroundColor: "rgb(0, 23, 140)" }}>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage
              src='\src\KeeProp Icons\pexels-oleksandr-p-7599735.jpg'
              alt="login form"
              className='rounded-start w-100'
            />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <img
                  src="\src\KeeProp Icons\image-removebg-preview (4).png"
                  alt="KeeProp"
                  style={{ height: "340px", marginLeft: "50px" }}
                />
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', color: "white" }}>Sign into your account</h5>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='formControlLg'
                type='email'
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {emailError && <div className="text-danger small">{emailError}</div>}
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              {passwordError && <div className="text-danger small">{passwordError}</div>}
              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Login</MDBBtn>
              <a className="small text-white-50" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2 text-white-50">Don't have an account?<Link to="/Register" className="mb-5 pb-lg-2 text-white-50 "><p>Register here</p></Link></p>
              <div className='d-flex flex-row justify-content-center'>
               <Link to="#" className="small text-warning me-1">Terms of use.</Link>
                <Link to="/PrivacyPolicy" className="small text-warning">Privacy Policy</Link>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
