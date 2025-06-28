import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // setSent('');

    try {
      const response = await fetch('https://formspree.io/f/myzjlbpk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setSent(false);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subheading">We'd love to hear from you</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Your Name</label>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label className="form-label">Your Email</label>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder=" "
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-input textarea"
            />
            <label className="form-label">Your Message</label>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              'Send Message'
            )}
          </button>
          
          {sent && (
            <div className="success-message">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
              <span>Thank you! We'll get back to you soon.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;