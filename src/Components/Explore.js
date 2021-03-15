import React from 'react';
import { courses } from './courses';

const Explore = () => {
  console.log(courses);
  return (
    <body className='loggedin'>
      <div className='container mt-4'>
        <div className='row mt-2'>
          {courses.map((course) => {
            return (
              <div key={course.id} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                <div className='card'>
                  <img src={course.imageUrl} className='card-img-top' />
                  <div className='card-body row '>
                    <h5 className='card-text col-8'>{course.name}</h5>
                    <p className='card-text col-4 text-right'>{course.level}</p>
                  </div>
                </div>
              </div>
            );
          })}
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

export default Explore;
