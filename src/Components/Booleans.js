import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booleans = () => {
  const notify = () =>
    toast.warn('Try again!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <body className='loggedin'>
      <div className='container-fluid'>
        <ToastContainer
          position='bottom-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className='row'>
          <Link to='homepage'>
            <div className='row'>
              <button>
                <i className='fa fa-remove'></i>
              </button>
            </div>
          </Link>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col-md-12'>
            <h3 className='question text-left'>
              What does the console.log output?
            </h3>
          </div>
        </div>
        <div className='questions row mb-5'>
          <div className='col-md-12'>
            <div className='questions'>
              <p></p>
              <p className='code'>
                {' '}
                <strong className='text-muted'>1</strong> const data = [true,
                null, 0, 1];
              </p>
              <p className='code'>
                {' '}
                <strong className='text-muted'>2</strong>{' '}
                console.log(data.filter(Boolean));
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='d-flex justify-content-center'>
            <div className='col-md-12'>
              <div className='d-flex justify-content-center'>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <div className='d-flex justify-content-center'>
                      <button
                        type='button'
                        className='correctAnswer button btn btn-primary id="modal-57064" href="#modal-container-57064" role="button" class="btn" data-toggle="modal"'
                        onClick={notify}
                      >
                        <strong>[true, 0]</strong>
                      </button>
                    </div>
                  </div>
                  <div className='answers col-md-6'>
                    <div className='d-flex justify-content-center'>
                      <button
                        type='button'
                        className='button btn btn-primary id="modal-57064" href="#modal-container-57064" role="button" class="btn" data-toggle="modal"'
                        onClick={notify}
                      >
                        <strong>[true, null]</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <div className='d-flex justify-content-center'>
                      <Link to='/correct'>
                        <button
                          type='button'
                          className='button btn btn-primary id="modal-57064" href="#modal-container-57064" role="button" class="btn" data-toggle="modal"'
                        >
                          <strong>[true, 1]</strong>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='d-flex justify-content-center'>
                      <button
                        type='button'
                        className='button btn btn-primary id="modal-57064" href="#modal-container-57064" role="button" class="btn" data-toggle="modal"'
                        onClick={notify}
                      >
                        <strong>[null, 0]</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <a
              id='modal-587894'
              href='#modal-container-587894'
              role='button'
              className='hint btn'
              data-toggle='modal'
              data-target='#exampleModal'
            >
              Hint
            </a>

            <div
              className='modal fade'
              id='#exampleModal'
              role='dialog'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='myModalLabel'>
                      Modal title
                    </h5>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='modal'
                    >
                      <span aria-hidden='true'>??</span>
                    </button>
                  </div>
                  <div className='modal-body'>...</div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Booleans;
