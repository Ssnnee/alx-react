import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <div className={css(styles.AppBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input className={css(styles.input)} type="email" name="email"></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input className={css(styles.input)} type="password" name="password"></input>
          </div>
            <button>OK</button>
        </form>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },

  small: {
    '@media (max-width: 600px)': {
      display: "flex",
      flexDirection: "column",
    }
  }
});

export default Login;
