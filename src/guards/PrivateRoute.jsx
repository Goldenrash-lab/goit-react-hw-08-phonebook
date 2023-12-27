import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectIsLoading, selectToken, selectUser } from 'store/auth/selectors';

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);

  function pleaseLogin() {
    toast.warning('Please login!');
    return <Navigate to={'/login'} />;
  }
  //   return token ? children : !isLoading ? pleaseLogin() : <h1>Loading...</h1>;
  return token ? children : pleaseLogin();
};

export default PrivateRoute;
