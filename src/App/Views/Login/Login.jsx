import * as React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-card">
      <h1>Iniciar sesion</h1>
      <form>
        <input type="text" name="username" placeholder="Usuario" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" name="login-view" className="login login-submit" value="Ingresar" />
      </form>
    </div>
  );
}

export default Login;