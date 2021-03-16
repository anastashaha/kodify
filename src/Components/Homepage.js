import React from 'react';
import { Link } from 'react-router-dom';
import debugging from './debugging.png';
import pushpop from './pushpop.png';
import types from './types.png';
import booleans from './booleans.png';

const Homepage = () => {
  return (
    <body className='loggedin'>
      <div className='container-fluid'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='d-flex justify-content-center'>
              <h3 className='homeTitle'>Welcome, @anastasha.</h3>
            </div>
          </div>
        </div>
        <div className='row md-5 mt-5'>
          <div className='d-flex justify-content-center'>
            <div className='col-md-6'>
              <div className='card'>
                <Link to='/bugs'>
                  <img src={debugging} className='card-img-top' />
                </Link>
                <div className='card-body row'>
                  <h5 className='text-left col-8'>Debug</h5>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card'>
                <Link to='/types'>
                  <img src={types} className='card-img-top' />
                </Link>
                <div className='card-body row'>
                  <h5 className='card-text col-8'>Types</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row md-5 mt-5'>
          <div className='d-flex justify-content-center'>
            <div className='col-md-6'>
              <div className='card'>
                <Link to='/booleans'>
                  <img src={booleans} className='card-img-top' />
                </Link>
                <div className='card-body row'>
                  <h5 className='card-text col-8'>Bools</h5>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card'>
                <Link to='/pushandpop'>
                  <img src={pushpop} className='card-img-top' />
                </Link>
                <div className='card-body row'>
                  <h5 className='card-text col-8'>Pop!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar' id='trial'>
        <a href='/homepage'>Home</a>
        <a href='/explore'>Explore</a>
        <a href='/profile'>Profile</a>
      </div>
    </body>
  );
};

export default Homepage;
