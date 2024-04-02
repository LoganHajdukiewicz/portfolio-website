import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Handle form submission and emailing on the backend server. Make a POST request with the formData. 
    //In meantime, just logged the form data. 
    console.log(formData);
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc', 
      borderRadius: '5px',
      maxWidth: '800px',
      margin: '50px auto 0 auto',
    }}>
      <h2 style={{textAlign: "center"}}>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="20"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ width: '100%' }}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
