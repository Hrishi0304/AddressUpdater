import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress();
    setStreet('');
    setCity('');
    setState('');
    setPincode('');
  };

  const addAddress = () => {
    const existingAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const newAddress = { street, city, state, pincode };
    const updatedAddresses = [...existingAddresses, newAddress];
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const goToAddressList = () => {
    navigate('list');
  }

  return (
    <div className="address-form-container">
        <h2>Address Updater</h2>
        <form onSubmit={handleSubmit} className="address-form">
        <input
            required
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="input-field"
        />
        <input
            required
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field"
        />
        <input
            required
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="input-field"
        />
        <input
            required
            type="number"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="input-field"
        />
        <button onClick={handleSubmit} type="submit" className="submit-button">Submit</button>
        </form>
        <button onClick={goToAddressList} className="check-address-list-button">Check Address List</button>
    </div>
  );
};

export default AddressForm;
