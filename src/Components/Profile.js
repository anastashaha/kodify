import React from 'react';
import { Link } from 'react-router-dom';

const recommended = ['iOS Engineering', 'Data Science', 'Machine Learning'];

const Profile = () => {
  return (
    <body className='loggedin'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='homeTitle'>@anastasha</h2>
            <h5 className='homeTitle'>Software Engineer.</h5>
            <div className='row'>
              <div className='col-md-12'>
                <hr className='rounded' />
                <h4 className='profile'>
                  <em>Learning</em>
                </h4>
                <p></p>
                <p>Javascript</p>
                <div className='progress'>
                  <div className='progress-bar w-75'></div>
                </div>
                <p></p>
                <p>Python</p>
                <div className='progress'>
                  <div className='progress-bar w-25'></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <hr className='rounded' />
                <h4 className='profile'>
                  <em>Recommended Courses</em>
                </h4>
                {recommended.map((course) => {
                  return (
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                      <div className='card'>
                        <div className='card-body row '>
                          <h5 className='card-text col-8'>{course}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <hr className='rounded' />
                <h4 className='profile'>
                  <em>Challenge a Friend</em>
                </h4>
                <p></p>
                <Link to='/correct'>
                  <button className='correctButton'>Find Friends</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar center' id='trial'>
        <a href='/homepage'>Home</a>
        <a href='/explore'>Explore</a>
        <a href='/profile'>Profile</a>
      </div>
    </body>
  );
};

export default Profile;
