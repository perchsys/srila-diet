import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remoteUsers, setRemoteUsers] = useState([]); // State to store remote user data

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting
  
    // Find the user in the fetched data based on username and password
    const user = remoteUsers.find(
      (userData) => userData.username === username && userData.password === password
    );
  
    if (user) {
      // Save the user's role in localStorage (you can use a more secure method for production)
      localStorage.setItem('userRole', user.role);
  
      // Redirect to different pages based on the user's role
      if (user.role === 'admin') {
        navigate('/watsapp'); // Replace '/admin' with your admin page route
      }
    } else {
      setError('Invalid username or password');
    }
  };
  
  // Fetch data from the remote website when the component mounts
  useEffect(() => {
    console.log('Fetching data...');
    axios
      .get('http://localhost:3031/users')
      .then((response) => {
        console.log('Data fetched:', response.data);
        setRemoteUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
<center>
    <div className="login-container">
      <div className="login-box">

        <h3>LOGIN</h3>
        <div className="cart">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in as Admin</p>

            <form >
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="input-group-append">
                  
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">    Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button onClick={handleLogin} className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">

              <p>
                --------------------------------------------------
              </p>

            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link to="/register">Register</Link>

            </p>
          </div>

        </div>
      </div>
    </div>

  </center>
  );
};

export default Adminlogin;
