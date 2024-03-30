import React from 'react';
import { useAuthContext } from '../Contexts/AuthContext';

const Login: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
