import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div className='align-self-center'>
                <div className='d-flex justify-content-center'>
                  <img
                    alt='kidkode logo'
                    src='https://www.layoutit.com/img/sports-q-c-140-140-3.jpg'
                  />
                </div>

                <div className='row'>
                  <div className='col-md-12'>
                    <div className='d-flex justify-content-center'>
                      <Link to='/login'>
                        <button type='button' className='btn btn-success'>
                          Log in
                        </button>
                      </Link>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <Link to='/login'>
                        <button type='button' className='btn btn-success'>
                          Sign up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
