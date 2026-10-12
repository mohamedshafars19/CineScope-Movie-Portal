import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/forms.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

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

    if (password !== confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
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
    signup(fullName, email, password);
    setSuccessMessage('✓ Account created successfully in frontend demo mode! Redirecting to homepage...');

    setTimeout(() => {
      navigate('/');
    }, 1800);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card-container">
        <div className="auth-card-header">
          <span className="auth-logo-badge">🍿</span>
          <h1 className="auth-card-title">Join CineScope</h1>
          <p className="auth-card-subtitle">
            Create your critic profile to bookmark films and write motion picture reviews.
          </p>
        </div>

        {/* Demo Mode Disclaimer */}
        <div className="auth-demo-notice">
          ℹ️ <strong>Frontend-Only Simulation:</strong> No external database is used. Registration simulates active profile creation in browser storage.
        </div>

        {successMessage && (
          <div className="alert-box success">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="signupName">Full Name</label>
            <input
              id="signupName"
              type="text"
              placeholder="e.g. Maya Lin"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
              }}
              className={`form-input ${errors.fullName ? 'input-error' : ''}`}
            />
            {errors.fullName && <span className="field-error-msg">{errors.fullName}</span>}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label className="form-label" htmlFor="signupEmail">Email Address</label>
            <input
              id="signupEmail"
              type="email"
              placeholder="critic@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
              }}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <span className="field-error-msg">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label" htmlFor="signupPassword">Password</label>
            <div className="form-input-wrapper">
              <input
                id="signupPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
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

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
              }}
              className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
            />
            {errors.confirmPassword && <span className="field-error-msg">{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-auth-submit">
            Create Critic Account
          </button>
        </form>

        <div className="auth-card-footer">
          Already registered on CineScope?
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
