import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <body id='body'>
      <div className='notyetContent'>
        <h3>
          <strong>Welcome to Kodify.</strong>
        </h3>
      </div>

      <div className='alignButton'>
        <Link to='/login'>
          <button className='correctButton'>
            <strong>Log in</strong>
          </button>
        </Link>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <div className='alignButton'>
        <Link to='/login'>
          <button className='correctButton'>
            <strong>Sign up</strong>
          </button>
        </Link>
      </div>
    </body>
    // <body className='correct'>
    //   <div>
    //     <div className='notyetContent'>
    //       <h3>
    //         <strong>Welcome to Kodify.</strong>
    //       </h3>
    //     </div>

    //     <div className='alignButton'>
    //       <Link to='/login'>
    //         <button className='correctButton'>
    //           <strong>Log in</strong>
    //         </button>
    //       </Link>
    //       <Link to='/login'>
    //         <button className='correctButton'>
    //           <strong>Sign up</strong>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </body>
    // <body className='home'>
    //   <div className='container-fluid'>
    //     <div className='row'>
    //       <div className='col-md-12'>
    //         <div className='row'>
    //           <div className='col-md-4'>
    //             <div className='align-self-center'>
    //               <div className='d-flex justify-content-center'></div>

    //               <div className='row'>
    //                 <div className='col-md-12'>
    //                   <div className='d-flex justify-content-center'>
    //                     <Link to='/login'>
    //                       <button type='button' className='btn btn-success'>
    //                         Log in
    //                       </button>
    //                     </Link>
    //                   </div>
    //                   <div className='d-flex justify-content-center'>
    //                     <Link to='/login'>
    //                       <button type='button' className='btn btn-success'>
    //                         Sign up
    //                       </button>
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='col-md-4'></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </body>
  );
};

export default Home;
