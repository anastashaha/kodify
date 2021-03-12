import React from 'react';
// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-12'>
          <div class='row'>
            <div class='col-md-12'>
              <div className='d-flex justify-content-center'>
                <img />
              </div>
            </div>
          </div>
          <form role='form'>
            <div class='form-group'>
              <div className='d-flex justify-content-center'>
                <label for='exampleInputEmail1'>Email address</label>
              </div>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
              />
            </div>
            <div class='form-group'>
              <div className='d-flex justify-content-center'>
                <label for='exampleInputPassword1'>Password</label>
              </div>
              <input
                type='password'
                class='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='d-flex justify-content-center'>
              <button type='submit' class='btn btn-primary'>
                Start Coding
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
