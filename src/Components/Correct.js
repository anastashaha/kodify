import React from 'react';
import { Link } from 'react-router-dom';

const Correct = () => {
  return (
    <body id='body'>
      <div>
        <div className='correctContent'>
          <h3>
            <strong>Congratulations! You have completed this section.</strong>
          </h3>
        </div>
        <div className='alignButton'>
          <Link to='/homepage'>
            <button className='correctButton'>
              <strong>KEEP CODING</strong>
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
};

export default Correct;
