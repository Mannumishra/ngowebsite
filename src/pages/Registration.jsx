import React, { useState } from 'react';
import loginImage from '../assets/images/logimg.png';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setCshowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
    pinCode: '',
    landMark: '',
    password: '',
    confirmPassword: ''
  });

  // Error State
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.phone || formData.phone.length !== 10) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.address1) newErrors.address1 = 'Address1 is required';
    if (!formData.address2) newErrors.address2 = 'Address2 is required';
    if (!formData.pinCode) newErrors.pinCode = 'Pin code is required';
    if (!formData.landMark) newErrors.landMark = 'Land mark is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission
    if (validateForm()) {
      console.log('Form Data:', formData);
      // Proceed with form submission, like sending data to backend
    }
  };

  return (
    <>
      <section className="Registration py-5">
        <div className="container Registration-container">
          <div className="form-container">
            <button className="home-button">PROCEED TO HOME</button>
            <h6>SIGN IN / REGISTRATION</h6>
            <p>Please fill your detail to create user ID and Password</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  id="name"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="password" style={{ color: "#6c757d", fontSize: "10px" }}>Password</label>
                <input
                  className="form-control"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  style={{ width: '100%' }}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '10px', top: '30px', cursor: 'pointer', color: '#6c757d',
                  }}
                >
                  {showPassword ? "🙉" : "🙈"}
                </span>
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="confirmPassword" style={{ color: "#6c757d", fontSize: "10px" }}>Confirm Password</label>
                <input
                  className="form-control"
                  name="confirmPassword"
                  type={cshowPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm password"
                  style={{ width: '100%' }}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <span
                  onClick={() => setCshowPassword(!cshowPassword)}
                  style={{
                    position: 'absolute', right: '10px', top: '30px', cursor: 'pointer', color: '#6c757d',
                  }}
                >
                  {cshowPassword ? "🙉" : "🙈"}
                </span>
                {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone No.</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Enter phone no. here"
                  type="number"
                  pattern="[0-9]"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input
                  id="dob"
                  name="dob"
                  placeholder="Date of birth"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {errors.dob && <div className="text-danger">{errors.dob}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  aria-label="Default select example"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <option selected>Select State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                {errors.state && <div className="text-danger">{errors.state}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  placeholder="City"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <div className="text-danger">{errors.city}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="address1">Address1</label>
                <input
                  id="address1"
                  name="address1"
                  placeholder="Type Your Address line 1"
                  type="text"
                  value={formData.address1}
                  onChange={handleInputChange}
                />
                {errors.address1 && <div className="text-danger">{errors.address1}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="address2">Address2</label>
                <input
                  id="address2"
                  name="address2"
                  placeholder="Type Your Address line 2"
                  type="text"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
                {errors.address2 && <div className="text-danger">{errors.address2}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="pin-code">Pin code</label>
                <input
                  id="pin-code"
                  name="pinCode"
                  placeholder="Enter pin code here"
                  type="number"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                />
                {errors.pinCode && <div className="text-danger">{errors.pinCode}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="land-mark">Land mark</label>
                <input
                  id="land-mark"
                  name="landMark"
                  placeholder="Enter road name"
                  type="text"
                  value={formData.landMark}
                  onChange={handleInputChange}
                />
                {errors.landMark && <div className="text-danger">{errors.landMark}</div>}
              </div>

              <button
                className="btn btn-primary w-100 mt-3 fw-bold"
                style={{ background: "#22B6AF", border: "none" }}
              >
                Proceed
              </button>
            </form>
          </div>

          <div className="image-container">
            <img alt="Save Girl Child poster with a red heart and hands illustration" src={loginImage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
