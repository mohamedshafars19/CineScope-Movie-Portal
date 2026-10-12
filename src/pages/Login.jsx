import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/forms.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [demoNotice, setDemoNotice] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Perform simulated login
    login(email, password, rememberMe);
    setDemoNotice('✓ Demo Mode: Frontend-only authentication simulation. You are now logged in as a demo critic!');

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card-container">
        <div className="auth-card-header">
          <span className="auth-logo-badge">🎬</span>
          <h1 className="auth-card-title">Critic Login</h1>
          <p className="auth-card-subtitle">
            Sign in to access your CineScope watchlist and post movie reviews.
          </p>
        </div>

        {/* Demo Mode Disclaimer */}
        <div className="auth-demo-notice">
          ℹ️ <strong>Frontend-Only Simulation:</strong> No backend server is required. Entering any valid email and password will simulate an active login session.
        </div>

        {demoNotice && (
          <div className="alert-box success">
            {demoNotice}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {/* Email Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="loginEmail">Email Address</label>
            <input
              id="loginEmail"
              type="email"
              placeholder="critic@cinescope.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
              }}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <span className="field-error-msg">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label" htmlFor="loginPassword">Password</label>
            <div className="form-input-wrapper">
              <input
                id="loginPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
                }}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="field-error-msg">{errors.password}</span>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options-row">
            <label className="remember-checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                alert('Demo Mode: Password reset is not available in frontend-only demo.');
              }}
              className="forgot-password-link"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary btn-auth-submit">
            Sign In to CineScope
          </button>
        </form>

        <div className="auth-card-footer">
          Don't have an account yet?
          <Link to="/signup">Register now</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
