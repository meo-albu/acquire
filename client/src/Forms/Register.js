import React from 'react'
import { useForm } from 'react-hook-form'
import { Error } from './Error';
import { Input } from './Input';

export const Register = () => {

  const {register, handleSubmit, errors, watch, setValue} = useForm();

  const submit = (data) => {
    console.log(data)
    Object.keys(data).forEach(el => {
      setValue(el, '')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
          { errors.username?.type === 'required' && <Error>Username is required</Error> }
          { errors.username?.type === 'minLength' && <Error>Username must have at least 3 characters</Error>}
        <Input type='text' name='username' placeholder='Username' ref={register({required: true, minLength: 3})} />
          { errors.email?.type === 'required' && <Error>Email is required</Error> }
        <Input type="email" name='email' placeholder='Email' ref={register({required: true})} />
          { errors.password?.type === 'required' && <Error>Password is required</Error> } 
          { errors.password?.type === 'minLength' && <Error>Password must be at least 6 characters long</Error>}
        <Input type='password' name='password' placeholder='Pasword' ref={register({required: true, minLength: 6})} />
          { errors.confirmPassword?.type === 'validate' && <Error>Passwords don't match</Error> }
        <Input type='password' name='confirmPassword' placeholder='Confirm Pasword' ref={register({required: true, validate: () => watch('password') === watch('confirmPassword')})} />
        <Input type='submit' value='Register' />
      </form>
    </div>
  )
}