// AddressList.jsx
import React, { useState } from 'react';
import '../globals.css';

const AddressList = () => {
    const [addresses, setAddresses] = useState(JSON.parse(localStorage.getItem('addresses')) || []);

    const editAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index].editable = true;
        setAddresses(updatedAddresses);
    };

    const saveAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses[index].editable = false;
        setAddresses(updatedAddresses);
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    };

    const deleteAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    };

    const handleEdit = (index) => {
        editAddress(index);
    };

    const handleSave = (index) => {
        saveAddress(index);
    };

    return (
        <div className="address-list-container">
            <h1>Address List</h1>
            <ul className="address-list">
                {addresses.map((address, index) => (
                    <li key={index} className="address-item">
                        <div className='address-font'>
                            <strong>Street: </strong> 
                            <p className='input-elements' contentEditable={address.editable || false}>{address.street}</p><br />
                            <strong>City: </strong> 
                            <p className='input-elements' contentEditable={address.editable || false}>{address.city}</p><br />
                            <strong>State: </strong> 
                            <p className='input-elements' contentEditable={address.editable || false}>{address.state}</p><br />
                            <strong>Pincode: </strong> 
                            <p className='input-elements' contentEditable={address.editable || false}>{address.pincode}</p>
                        </div>
                        <div className="address-buttons">
                            {address.editable ? (
                                <button onClick={() => handleSave(index)} className='save'>Save</button>
                            ) : (
                                <button onClick={() => handleEdit(index)} className='edit'>Edit</button>
                            )}
                            <button onClick={() => deleteAddress(index)} className='delete'>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddressList;
