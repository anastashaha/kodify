import React from 'react';
import { Link } from 'react-router-dom';

const Levels = () => {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-12'>
            <p>Choose your level</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-center'>
                <Link to='/easy'>
                  <button type='button' className='btn btn-success'>
                    Easy
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-center'>
                <Link to='/medium'>
                  <button type='button' className='btn btn-success'>
                    Medium
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-center'>
                <Link to='/hard'>
                  <button type='button' className='btn btn-success'>
                    Hard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
