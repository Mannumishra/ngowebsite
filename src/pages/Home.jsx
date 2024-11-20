import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import usericon from '../assets/images/usericon1.png';
import Donateslider from '../components/Donateslider';
import Support from '../components/Support';
import Donateblog from '../components/Donateblog';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  // Function to handle 'DONATE NOW' button click
  const handleDonateClick = () => {
    setShowPopup(true); 
  };

  // Function to close the popup
  const handlePopupClose = () => {
    setShowPopup(false); 
    setAmount(''); 
    setError(''); 
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setError(''); 
  };

  const handleConfirm = () => {
    if (amount >= 100) {
      setShowPopup(false); 
      // navigate('/payment-gateway'); 
    } else {
      setError('Please enter an amount of at least ₹100 to proceed.'); 
    }
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <p className="fs-1 fw-bold">बेटी बचाओ, बेटी पढ़ाओ</p>
          <h1>BELIVING IS <br /> ACHIVING</h1>
          <h2 className="mt-2 mb-3">Sai Balika Vikas Kalyan Society</h2>
          <button className="btn-donate" onClick={handleDonateClick}>DONATE NOW</button>
        </div>
      </div>

      <div className="info-section mx-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी बचाओ, <br/>बेटी पढ़ाओ</h5>
                  <p>उन्नति का मार्ग, समाज <br/> का आधार|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी को पढ़ाओ <br/>और सक्षम बनाओ</h5>
                  <p>समाज की प्रगति का <br/> एक महत्वपूर्ण कदम|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी<br/>जन्मोत्सव</h5>
                  <p>नारी शक्ति की उत्थानी, समाज का संगठनीकरण|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी<br/>जन्मोत्सव</h5>
                  <p>नारी शक्ति की उत्थानी, समाज का संगठनीकरण|</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Confirmation Popup */}
    {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4>Are you sure you want to donate?</h4>
            <h3>बेटी बचाओ, बेटी पढ़ाओ</h3>
            <div className="form-group mt-3 mb-3">
              <label htmlFor="amount">Enter Amount (₹):</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                min="10"
                max="1000"
                className="form-control mb-3 mt-3"
                placeholder="Enter amount"
              />
              {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="popup-buttons">
              <button className="btn btn-secondary" onClick={handlePopupClose}>Cancel</button>
              <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Donate slider section */}
      <Donateslider />

      {/* Support section */}
      <Support />

      {/* Donate Blog section */}
      <Donateblog />
    </>
  );
};

export default Home;
