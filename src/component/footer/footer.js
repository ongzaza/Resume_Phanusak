import "./footer.css";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_usxymwl",
        "template_jj05wgw",
        form.current,
        "x1ZNVSjJCrOM-Vp0j"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Send success',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
    
  };

  return (
    <>
      <div className="footer">
        <center>
         
          
        
        <div className="email">
        <h2 className="text-head">Send email here</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-sub">
            <input className="textarea-email" type="text" name="to_name" id="to_name"placeholder="Enter Your Topic" required/>
            <input className="textarea-email" type="email" name="from_name" id="from_name" placeholder="Enter Your Email" required/>
            <textarea className="textarea-email" name="message" id="message"placeholder="Enter Content" required/>
            </div>
            <span>
            <input className="button-send" type="submit" value="Send" />
            </span>
          </form>

        </div>
        <div>
            <a href="https://www.github.com/ongzaza">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.facebook.com/ong.zippy">
              <AiFillFacebook className="icon" />
            </a>
            <a href="https://www.google.com/webhp?hl=th&sa=X&ved=0ahUKEwj1wI-Eoav7AhXJTGwGHSR-AAEQPAgI">
              <AiFillInstagram className="icon" />
            </a>
          </div>
        </center>
      </div>
      
    </>
  );
};

export default Footer;
