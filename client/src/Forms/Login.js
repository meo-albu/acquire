import React from 'react'
import { useForm } from 'react-hook-form'
import { Error } from './Error';
import { Input } from './Input';
import { UserImage } from './UserImage';
import { login } from 'Store/Actions';
import { useDispatch } from 'react-redux';
import { ServerError } from './ServerError';


export const Login = () => {

  const dispatch = useDispatch()

  const {register, handleSubmit, errors, setValue} = useForm();

  const submit = (data) => {
    const { email, password } = data
    dispatch(login({email, password}))
    Object.keys(data).forEach(el => {
      setValue(el, '')
    })
  }

  return (
    <div>
      <UserImage />
      <form onSubmit={handleSubmit(submit)}>
          { errors.email?.type === 'required' && <Error>Email is required</Error> }
        <Input type="email" name='email' placeholder='Email' ref={register({required: true})} />
          { errors.password?.type === 'required' && <Error>Password is required</Error> } 
          { errors.password?.type === 'minLength' && <Error>Password must have at least 6 characters</Error>}
        <Input type='password' name='password' placeholder='Pasword' ref={register({required: true, minLength: 6})} />
          <ServerError />
        <Input type='submit' value='Login' />
      </form>
    </div>
  )
}