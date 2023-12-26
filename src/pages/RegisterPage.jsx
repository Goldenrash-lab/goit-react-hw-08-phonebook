import { Button, Card, CardBody, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'store/auth/thunks';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function submit(data) {
    dispatch(signUpThunk(data));
  }
  return (
    <>
      <Heading as="h2">Sign Up</Heading>
      <Card maxW="md">
        <CardBody>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">
              Name
              <Input {...register('name')} type="text" name="name" />
            </label>
            <label htmlFor="email">
              Email
              <Input {...register('email')} type="text" name="email" />
            </label>
            <label htmlFor="password">
              Password
              <Input marginBottom="15px" {...register('password')} type="text" name="password" />
            </label>
            <Button colorScheme="teal">Sign Up</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterPage;
