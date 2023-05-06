import React from 'react'
import All from './All'
import './Contact.css'
import Footer from './Footer'
import Phone from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 */
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Contact() {
  return (
    <>
      {/*  <div>
        <FontAwesomeIcon icon="fa-solid fa-check-square" />
        <FontAwesomeIcon icon="fa-solid fa-phone" />
        <FontAwesomeIcon icon={faEnvelope} />
        {/* <FontAwesomeIcon icon={faPhone} />
      <FontAwesomeIcon icon={faFacebook} />
        <h1>This is Contact Page</h1><FontAwesomeIcon icon="fa-thin fa-phone" />

      </div> */}


      <All />
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>

      <div className="Option">
        <div className="Optional2  Mobile">
          <p><Phone style={{ width: '113px', height: '3rem', color: 'green' }} /></p>
          <h1>Phone</h1>
          <p>+01-3-8888-6868</p>
        </div>
        <div className="Optional2  Address">
          <p><LocationOnIcon style={{ width: '113px', height: '3rem', color: 'green' }} /></p>
          <h1>Address</h1>
          <p>60-49 Road 11378 New York</p>
        </div>
        <div className="Optional2  OpenTime">
          <p><AccessTimeIcon style={{ width: '113px', height: '3rem', color: 'green' }} /></p>
          <h1>OpenTime</h1>
          <p>10:00 am to 2:00 pm</p>
        </div>
        <div className="Optional2  Email">
          <p><EmailIcon style={{ width: '113px', height: '3rem', color: 'green' }} /></p>


          <h1>Email</h1>
          <p>Murshid.com</p>
        </div>

      </div>

      <div className="Leave_Message">
        <h1 style={{ textAlign: 'center' }}>Leave Message</h1>
        <form action="/" method="get">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email ' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message '></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>


      <Footer />

    </>


  )
}
