import React, { Component } from 'react';
import './Error.css';

export default class Error extends Component {
  render() {
    return (
        <div className='error-main-div'>
            <div className='error-page'>
                <h1>404 Error</h1>
                <h4>Page Note Found</h4>
            </div>
        </div>
    );
  }
}
