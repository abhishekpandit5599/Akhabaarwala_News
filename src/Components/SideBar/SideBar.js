import React, { Component } from 'react';
import './SideBar.css';
import {Link} from "react-router-dom";

export default class SideBar extends Component {
    
    
  render() {
    return(
        <>
            <div className='side-bar'>
                <div className='filter-news'>
                    <div className='category'>
                        <h3>Category</h3>
                        <ul>
                            <li><Link to='/business'>business</Link></li>
                            <li><Link to='/entertainment'>entertainment</Link></li>
                            <li><Link to='/general'>general</Link></li>
                            <li><Link to='/health'>health</Link></li>
                            <li><Link to='/science'>science</Link></li>
                            <li><Link to='/sports'>sports</Link></li>
                            <li><Link to='/technology'>technology</Link></li>
                        </ul>
                    </div>
                    
                    <div className='country'>
                    <hr/>
                        <h3>Country</h3>
                        <ul>
                            <li><Link to="/india">India</Link></li>
                            <li><Link to="/us">United States</Link></li>
                        </ul>
                    </div>

                    <div className='language'>
                    <hr/>
                        <h3>Language</h3>
                        <ul>
                            <li><Link to="/hindi">Hindi</Link></li>
                            <li><Link to="/english">English</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
  }
}
