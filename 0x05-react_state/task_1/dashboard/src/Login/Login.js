import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.appBody, styles.small)}>
        <h1>Log in to continue</h1>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <div>
            <label htmlFor="email">Email: </label>
            <input className={css(styles.noBorder)} type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input className={css(styles.noBorder)} type="password" id="password" name="password" />
          </div>
          <button className={css(styles.button)}>OK</button>
        </form>
      </div>
    </>
  );
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
