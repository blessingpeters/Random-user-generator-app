import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

function Contact() {
  const navigate = useNavigate()
  const  goHome =(event) =>{
    event.preventDefault()
    navigate("/")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your feedback!");
  }
}
  return (
    <div className="home-container">
      <div id="left">
        <Navbar />
        <h2>Contact Us</h2>
        <p>Fill out this form to get in touch with us.</p>
      </div>
      
      <div id="right">
        <h2>Send us a message</h2>
       <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"  required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"  required/>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone"  required/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>
          <div className="c-btn">
            <button type="submit">Submit</button>
            <button onClick={goHome}>Go Home</button>
          </div>
          
       </form>
        
      </div>
    </div>
  );
}

export default Contact;
