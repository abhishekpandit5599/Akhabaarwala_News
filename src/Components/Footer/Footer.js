import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <>
            <div className='footer-div'>
                <div><i className="fa-sm placeicon far fa-copyright"></i> <span>Copyright Akhabaar. All Right Reserved</span></div>
            </div>
        </>
    );
  }
}
