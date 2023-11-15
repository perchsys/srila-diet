import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
  });

  const [storedData, setStoredData] = useState([]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://users-n0on.onrender.com/users', formData)
      .then(function (response) {
        console.log('Data posted successfully:', response.data);
        // After successfully posting, set the displayData state to true.
      
      })
      .catch(function (error) {
        console.error('Error posting data:', error);
      });
  };

  const fetchData = () => {
    // Fetch the data from your JSON server and set it to the storedData state.
    axios.get('https://users-n0on.onrender.com/users')
      .then(function (response) {
        setStoredData(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  // Use the useEffect hook to fetch the data when the component mounts.
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <h1>Create User Credentils</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">User name:</label>
        <input
        className="input"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
        className="input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="userRole">User Role:</label>
        <select
                        className="input"
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select User Type...</option>
                        <option value="admin">Admin</option>
                        <option value="diabetes">Diabetes</option>
                        <option value="hypertension">Hypertension</option>
                        <option value="obesity">Obesity</option>
                        <option value="pcos">PCOS</option>
                        <option value="pregnancy">Pregnant</option>
                    </select>

        <button className="button" type="submit">Submit</button>
      </form>

      

     
  <div>
     <h2>Stored Data</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {storedData.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>


    </div>
  );
}

export default Admin;
