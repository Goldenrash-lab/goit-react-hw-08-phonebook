import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'store/auth/thunks';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submit(data) {
    console.log(data);
    dispatch(signInThunk(data));
  }

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">
          Email
          <input {...register('email')} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...register('password')} type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
