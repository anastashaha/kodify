import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../store/login';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.setUsername(this.state.username);
    console.log('IN MOUNT', this.props.username);
  }
  handleChange(evt) {
    this.setState({ ...this.state, username: evt.target.value });
  }
  render() {
    console.log('USERNAME', this.state.username);
    console.log('props', this.props);
    return (
      <body id='body'>
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
                    <label className='label' for='exampleInputEmail1'>
                      <strong>Username</strong>
                    </label>
                  </div>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    onChange={this.handleChange}
                  />
                </div>
                <div class='form-group'>
                  <div className='d-flex justify-content-center'>
                    <label for='exampleInputPassword1'>
                      <strong>Password</strong>
                    </label>
                  </div>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <Link to='/homepage'>
                    <button type='submit' class='correctButton btn btn-primary'>
                      Start Coding
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
