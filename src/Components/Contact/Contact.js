import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
        <div className='contact-container'>
            <div className='form-info'>
                <form>
                    <h3>SAY SOMETHING</h3>
                    <input type='text' placeholder='Your Name..'/><br/>
                    <input type='mail' placeholder='Your Mail..'/><br/>
                    <textarea rows='5' placeholder='Message..'/><br/>
                    <button>SEND</button>
                </form>   
            </div>
            <div className='contact-info'>
                <div className='contact-details'>
                    <div><i className="placeicon fa-lg far fa-envelope"></i><span> abhishekpandit5599@gmail.com</span></div>
                    <div><i className="placeicon fa-lg fas fa-mobile-alt"></i><span> +91 9557953242</span></div>
                    <div><i className="placeicon fa-lg far fa-map-marker-alt"></i><span> Muzaffarnagar UP 251001</span></div>
                </div>
            </div>
            <div className='buttom-design'>
                <div className='buttom-logo'>
                    <i className="placeicon fa-2x fab fa-youtube"></i>  
                    <i className="placeicon fa-2x fab fa-twitter"></i>
                    <i className="placeicon fa-2x fab fa-instagram"></i>
                    <i className="placeicon fa-2x fab fa-facebook"></i>
                </div>
            </div>
        </div>
    );
  }
}
