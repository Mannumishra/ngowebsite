import React, { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const [amount, setAmount] = useState(100); 
    const [isCustom, setIsCustom] = useState(false);
    const [showPopup, setShowPopup] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate(); 

    // Function to handle 'DONATE NOW' button click
    const handleDonateClick = () => {
        if (amount >= 100) {
            setShowPopup(true); 
            setErrorMessage(''); 
        } else {
            setErrorMessage('Please enter amount must be ₹100 to proceed.');
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false); 
    };

    
    const handleConfirm = () => {
        setShowPopup(false);
        // navigate('/payment-gateway'); // Navigate to payment gateway
    };

    return (
        <>
            <div className="container-fluid mb-5 support-hero">
                <div className="donation-box">
                    <h2>Support Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisi, tempus ut sem a</p>
                    <div className="rupees-container">
                        <div className="icon">
                            <FaRupeeSign />
                        </div>
                        <input 
                            type="number" 
                            value={amount} 
                            onChange={(e) => {
                                const value = e.target.value;
                                if (!isNaN(value) && value >= 0) {
                                    setAmount(parseFloat(value)); 
                                }
                            }}  
                            style={{ width: "100%", height: "48px", border:"none", textAlign: "center", fontSize:"30px", fontWeight:"700", color:"#6c757d"}} 
                        />
                    </div>
                    <div className="btn-group d-flex" role="group">
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(1000)}> ₹1000 </button>
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(1500)}> ₹1500 </button>
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(2000)}> ₹2000 </button>
                        <button type="button" className="btn btn-warning" onClick={() => setIsCustom(true)}> Custom </button>
                    </div>
                    <button className="btn-donate mt-3" onClick={handleDonateClick}>DONATE NOW</button>

                    {/* Display error message if amount is less than ₹100 */}
                    {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
                </div>
            </div>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h4>Are you sure you want to donate ₹{amount}?</h4>
                        <div className="popup-buttons">
                            <button className="btn btn-secondary" onClick={handlePopupClose}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Support;
