import React from 'react';
import { useAuthContext } from '../Contexts/AuthContext';

const Profile: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to your Profile!</h2>
      ) : (
        <h2>Please login to view your Profile.</h2>
      )}
    </div>
  );
};

export default Profile;
