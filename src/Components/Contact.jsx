import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    try {
      const r = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      reset()
      const res = await r.text();
      console.log(data, res);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    await delay(2);
    console.log(data)
  };

 
  

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">
          <span role="img" aria-label="email">📧</span> Get in Touch
        </h2>

        <div className="contact-info">
          <p>Have questions or suggestions. We're here to help!</p>
          <div className="contact-methods">
            <div className="contact-card">
              <h3>Email</h3>
              <p>support@xyz.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Send Us a Message</h3>

          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("username", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "Minimum length is 3" },
                maxLength: { value: 25, message: "Maximum length is 25" },
              })}
            />
            {errors.username && <div className='red'>{errors.username.message}</div>}
          </div>

          <div className="form-group">
            <label>Your Email:</label>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <div className='red'>{errors.email.message}</div>}
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              {...register("help", {
                required: { value: true, message: "Message is required" },
              })}
            />
            {errors.help && <div className='red'>{errors.help.message}</div>}
          </div>

          <button disabled={isSubmitting} type="submit" className="submit-btn">
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>

        </form>
      </div>
    </>
  );
};

export default ContactSection;
