import React, { Component } from 'react';
import './Navbar.css';
import logo from './favicon.png';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  
  handleMenu =() =>{
    let liTag = document.getElementsByClassName('menu-option');
    Array.from(liTag).forEach((element) =>{
      if(element.style.display !== 'block'){
        element.style.display = 'block';
      }else{
        element.style.display = 'none';
      }
    })
  }

  render() {
    return(
      <>
        <nav className='navbar'>
          <Link to="/"><img src={logo} alt=''/></Link>
          <div className='brand-name'><h2>AkhabaarWala</h2></div>
          <i onClick={this.handleMenu} className="placeicon menu-icon fas fa-bars"></i>
          <ul>
            <li className='menu-option'><Link to="/"><i className="placeicon fas fa-home"></i> Home</Link></li>
            <li className='menu-option'><Link to="/contact"><i className="placeicon fas fa-phone-alt"></i> Contact</Link></li>
            <li className='menu-option'><Link to="/about"><i className="placeicon far fa-info-circle"></i> About</Link></li>
          </ul>
        </nav>
      </>
    );
  }
}


