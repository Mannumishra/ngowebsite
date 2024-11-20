import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/images/logimg.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId) newErrors.userId = 'Phone/User ID is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      console.log('Form Submitted', formData);
      // Proceed with form submission, like API call for login
    }
  };

  return (
    <>
      <section className="login py-5">
        <div className="container login-container">
          <div className="left-section">
            <Link to="/">
              <button className="btn btn-primary btn1">PROCEED TO HOME</button>
            </Link>
            <h2>LOGIN</h2>
            <p>Please fill your detail to access your account.</p>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="userId"
                style={{ color: '#6c757d', fontSize: '15px' }}
              >
                Phone / User ID
              </label>
              <input
                type="text"
                placeholder="phone / user id"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
              />
              {errors.userId && (
                <div className="text-danger" style={{ fontSize: '12px' }}>
                  {errors.userId}
                </div>
              )}

              <div style={{ position: 'relative' }}>
                <label
                  htmlFor="password"
                  style={{ color: '#6c757d', fontSize: '15px' }}
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  style={{ width: '100%' }}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '30px',
                    cursor: 'pointer',
                    color: '#6c757d',
                  }}
                >
                  {showPassword ? '🙉' : '🙈'}
                </span>
                {errors.password && (
                  <div className="text-danger" style={{ fontSize: '12px' }}>
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <Link to="" style={{ float: 'right' }}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Sign in
              </button>
              {/* Uncomment to use Google login button */}
              {/* <button type="button" className="btn btn-google"><FaGoogle /> Sign in with Google</button> */}

              <div className="signup">
                <p>
                  Don't have an account? <Link to="/Registration">Sign up</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="right-section">
            <img
              src={loginImage}
              alt="Illustration of a person holding a child with the text 'SAVE GIRL CHILD'"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
