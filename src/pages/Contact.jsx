import React, { useState } from 'react';
import '../styles/forms.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill out all required fields before submitting.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card-container" style={{ maxWidth: '580px' }}>
        <div className="auth-card-header">
          <span className="auth-logo-badge">✉️</span>
          <h1 className="auth-card-title">Contact CineScope</h1>
          <p className="auth-card-subtitle">
            Have questions, feedback, or a film partnership idea? Send us a message.
          </p>
        </div>

        {/* Demo Mode Notice */}
        <div className="auth-demo-notice">
          ℹ️ <strong>Frontend-Only Form:</strong> Inputs are validated client-side. Submitting displays a demo confirmation without sending data to any external mail server.
        </div>

        {submitted ? (
          <div className="alert-box success" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 8px', color: '#10b981' }}>✓ Message Received!</h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
              Thank you, <strong>{formData.name}</strong>. Your feedback has been simulated successfully in this frontend demo.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
              }}
              style={{ marginTop: '16px' }}
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="alert-box error">{error}</div>}

            <div className="form-group">
              <label className="form-label" htmlFor="contactName">Your Name *</label>
              <input
                id="contactName"
                name="name"
                type="text"
                placeholder="e.g. Jordan Bell"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactEmail">Your Email *</label>
              <input
                id="contactEmail"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactSubject">Subject</label>
              <select
                id="contactSubject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                style={{ cursor: 'pointer' }}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Film Review Feedback">Film Review Feedback</option>
                <option value="Bug Report">Technical Feedback / Bug Report</option>
                <option value="Lab Project Evaluation">Lab Project Evaluation</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contactMessage">Your Message *</label>
              <textarea
                id="contactMessage"
                name="message"
                rows="4"
                placeholder="Write your inquiry or comment here..."
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
