import { Formik,Form,Field,ErrorMessage } from 'formik';
import wifi from '@/assets/images/wifi.png';
import * as yup from 'yup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const initialMobileNumberValues = {
    mobileNumber: ''
  }
  const mobileValidation = yup.object({
    mobileNumber: yup
      .string()
      .required('Mobile Number is required')
      .transform((value) => value.replace(/\D/g, '')) // Remove non-numeric characters (like dashes)
      .matches(/^[0-9]{10}$/, 'Mobile Number must be exactly 10 digits'),
  });

  const otpInitialValue = {
    otp: ''
  }

  const otpValidation = yup.object({
    otp: yup
      .string()
      .required('OTP is required')
      .matches(/^[0-9]{6}$/, 'OTP must be exactly 6 digits'),
  });

  return (
    <div id="loginPage">
  <div className="container">
    <div className="row px-0">
      <div className="col-12 col-md-6">
        <div className="login-image text-center">
          <img src={wifi} alt="Login" className="img-fluid" />
          <h2>Welcome to WifiTech Fast Wi Fi</h2>
          <Link to={'/plans'} className="btn btn-primary">Go to Plans</Link>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card login-card d-flex justify-content-center flex-column">
          {/* <h5 className="login-title text-center">Subscriber Login with Mobile Number</h5> */}
          <h5 className="login-title text-center"> Login to Account</h5>

          <div className="login-form">
            {!otpSent && (
              <Formik initialValues={initialMobileNumberValues} validationSchema={mobileValidation} onSubmit={(values) => { console.log(values); setOtpSent(true); }}>
                <Form>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      maxLength="10"
                      placeholder="Enter Mobile Number"
                      autoFocus
                    />
                    <ErrorMessage name="mobileNumber" component="div" className="err-msg text-danger mt-2" />
                  </div>
                  <div className='form-actions d-flex justify-content-end mt-5'>
                    <button type="submit" className="btn btn-submit-primary">Send Code</button>
                  </div>
                </Form>
              </Formik>
            )}
            {otpSent && (
              <Formik initialValues={otpInitialValue} validationSchema={otpValidation} onSubmit={(values) => { console.log(values); navigate('/plans') }}>
                <Form>
                  <div className="form-group">
                    <Field
                      type="text"
                      className="form-control"
                      id="otp"
                      name="otp"
                      autoFocus
                      maxLength="6"
                      placeholder="Enter OTP"
                    />
                    <ErrorMessage name="otp" component="div" className="err-msg text-danger mt-2" />
                  </div>
                  <div className='form-actions d-flex justify-content-between mt-5'>
                    <a href="#" className="primary-link d-flex align-items-center">Resend</a>
                    <button type="submit" className="btn btn-submit-primary">Login</button>
                  </div>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
