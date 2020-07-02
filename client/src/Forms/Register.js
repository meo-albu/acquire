import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { Error } from './Error'
import { Input } from './Input'
import { UserImage } from './UserImage'
import { error } from 'Store/Actions'
import { useDispatch } from 'react-redux'
import { ServerError } from './ServerError'

export const Register = () => {

  const {register, handleSubmit, errors, watch, setValue} = useForm();
  const dispatch = useDispatch()

  const submit = (data) => {
    const {name, email, password} = data
    axios.post('http://192.168.0.106:8000/register', {
      name,
      email,
      password
    }).then(response => {
      console.log(response)
      Object.keys(data).forEach(el => {
        setValue(el, '')
      })
    }).catch(err => dispatch(error(err.response.data)))
  }

  return (
    <div>
      <UserImage />
      <form onSubmit={handleSubmit(submit)}>
          { errors.name?.type === 'required' && <Error>Username is required</Error> }
          { errors.name?.type === 'minLength' && <Error>Username must have at least 3 characters</Error>}
        <Input type='text' name='name' placeholder='Username' ref={register({required: true, minLength: 3})} />
          { errors.email?.type === 'required' && <Error>Email is required</Error> }
        <Input type="email" name='email' placeholder='Email' ref={register({required: true})} />
          { errors.password?.type === 'required' && <Error>Password is required</Error> } 
          { errors.password?.type === 'minLength' && <Error>Password must have at least 6 characters</Error>}
        <Input type='password' name='password' placeholder='Pasword' ref={register({required: true, minLength: 6})} />
          { errors.confirmPassword?.type === 'validate' && <Error>Passwords don't match</Error> }
        <Input type='password' name='confirmPassword' placeholder='Confirm Pasword' ref={register({required: true, validate: () => watch('password') === watch('confirmPassword')})} />
        <ServerError />
        <Input type='submit' value='Register' />
      </form>
    </div>
  )
}