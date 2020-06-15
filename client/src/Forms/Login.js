import React from 'react'
import { useForm } from 'react-hook-form'
import { Error } from './Error';
import { Input } from './Input';

export const Login = () => {

  const {register, handleSubmit, errors, setValue} = useForm();

  const submit = (data) => {
    console.log(data)
    Object.keys(data).forEach(el => {
      setValue(el, '')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
          { errors.email?.type === 'required' && <Error>Email is required</Error> }
        <Input type="email" name='email' placeholder='Email' ref={register({required: true})} />
          { errors.password?.type === 'required' && <Error>Password is required</Error> } 
          { errors.password?.type === 'minLength' && <Error>Password must be at least 6 characters long</Error>}
        <Input type='password' name='password' placeholder='Pasword' ref={register({required: true, minLength: 6})} />
        <Input type='submit' value='Login' />
      </form>
    </div>
  )
}