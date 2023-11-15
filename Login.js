import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <center>
    <div className="login-container">
      <div className="login-box">

        <h3>LOGIN</h3>
        <div className="cart">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

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
                  <button className="btn btn-primary btn-block">
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
  )
}

export default Login
