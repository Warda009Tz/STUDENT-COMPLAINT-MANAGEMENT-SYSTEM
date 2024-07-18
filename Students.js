import React, { useState } from "react";
import axios from "axios"; // Import Axios
import '../App.css';

const Students = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    CourseName:"", 
    Email: "",
    Challange: "",
   YearofStudy: ""
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api for postmaping to databases', formData);
      console.log('Form data sent:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        fullname: "",
        Coursename:"",  
        email: "",
        challange: "",
        yearofstudy: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className= "form-container" style={{ maxHeight: 'calc(100vh - 200px)' , overflowY: 'auto'}}>
     
      <h2>Studnt Complaints Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullnameirstname">Enter your fullname:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

       

        <div className="form-group">
          <label htmlFor="coursename">Course Name:</label>
          <input
            type="text"
            id="coursename"
            name="coursename"
            value={formData.coursename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearofstudy">Year of Study:</label>
          <input
            type="number"
            id="yearofstudy"
            name="yearofstudy"
            value={formData.yearofstudy}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="challange">Enter your challange</label>
          <textarea
            id="challange"
            name="challange"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Students;
