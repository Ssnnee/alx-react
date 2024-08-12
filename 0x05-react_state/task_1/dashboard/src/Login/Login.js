import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.enableSubmit = this.enableSubmit.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  enableSubmit() {
    this.state.email.length > 0 && this.state.password.length > 0
    ? this.setState({ enableSubmit: true }) :
      this.setState({ enableSubmit: false });
  }


  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    this.enableSubmit();
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    this.enableSubmit();
  }



  render() {
    return (
      <>
      <div className={css(styles.appBody, styles.small)}>
        <h1>Log in to continue</h1>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              className={css(styles.noBorder)}
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              className={css(styles.noBorder)}
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            className={css(styles.button)}
            type='submit'
            value='OK'
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",

  },

  form: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    '@media (max-width: 600px)': {
      flexDirection: "column",

    }
  },

  small: {
    '@media (max-width: 600px)': {
      display: 'grid',
      justifyContent: 'left',

    }
  },
  noBorder: {
    '@media (max-width: 600px)': {
      border: 'none'
    }
  },
  button: {
    '@media (max-width: 600px)': {
      width: '31px'
    }
  }
})

export default Login;
