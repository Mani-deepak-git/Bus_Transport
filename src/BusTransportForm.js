import React, { useState } from 'react';
import './BusTransportForm.css';

const BusTransportForm = ({isVisible}) => {
  const [formData, setFormData] = useState({
    busNumber: '',
    route: '',
    departureTime: '',
    arrivalTime: '',
    driverName: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className={`form-container ${isVisible ? 'slide-in' : 'slide-out'}`}>
      <h2>College Bus Transport Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Bus Number:
          <input
            type="text"
            name="busNumber"
            value={formData.busNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Route:
          <input
            type="text"
            name="route"
            value={formData.route}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Departure Time:
          <input
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Arrival Time:
          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Driver Name:
          <input
            type="text"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusTransportForm;
