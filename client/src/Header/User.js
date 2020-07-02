import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { faUser, faTimes, faUserAlt, faUserEdit, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Error } from 'Forms/Error';

export const User = () => {
  const userName = useSelector(state => state.authReducer.user.name)
  const userEmail = useSelector(state => state.authReducer.user.email)
  const [showModal, setShowModal] = useState(false)
  const {register, handleSubmit, errors, watch, setValue} = useForm();

  const submit = (data) => {
    const {currentPassword, newPassword, confirmPassword} = data
    if(newPassword === confirmPassword) {
      console.log(currentPassword, newPassword)
      Object.keys(data).forEach(el => {
        setValue(el, '')
      })
    } else {
      console.log('passwords dont match');
    }
  }

  return (
    <UserDiv>
      <UserSpan onClick={() => setShowModal(!showModal)}><FontAwesomeIcon icon={faUser} /> &nbsp;{userName}</UserSpan>

      <Modal showModal={showModal}>

        <UserImage><FontAwesomeIcon icon={faUserAlt} /></UserImage>

        <CloseModal onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes} /></CloseModal>
          <UserInfo><FontAwesomeIcon icon={faUserAlt} className="infoIcon" /> {userName}</UserInfo>
          <UserInfo><FontAwesomeIcon icon={faEnvelope} className="infoIcon" /> {userEmail}</UserInfo>

          <form onSubmit={handleSubmit(submit)}>
            <UserInfo><FontAwesomeIcon icon={faKey} className="infoIcon" /> <input type="password" name="currentPassword" ref={register({required: true})} placeholder="Current Password" /></UserInfo>
            <UserInfo><FontAwesomeIcon icon={faKey} className="infoIcon" /> <input type="password" name="newPassword" ref={register({required: true, minLength: 6})} placeholder="New Password" /></UserInfo>
            <UserInfo><FontAwesomeIcon icon={faKey} className="infoIcon" /> <input type="password" name="confirmPassword" ref={register({required: true, validate: () => watch('newPassword') === watch('confirmPassword')})} placeholder="Confirm New Password" /></UserInfo>
            { errors.newPassword?.type === 'required' && <Error>New Password is required</Error> } 
            { errors.currentPassword?.type === 'required' && <Error>Current Password is required</Error> } 
            { errors.confirmPassword?.type === 'required' && <Error>Confirm Password is required</Error> } 
            { errors.newPassword?.type === 'minLength' && <Error>Password must have at least 6 characters</Error>}
            { errors.confirmPassword?.type === 'validate' && <Error>Passwords don't match</Error> }
            <UserInfo><input type="submit" value="Change Password" /></UserInfo>
          </form>
      </Modal>
    </UserDiv>
  )
}

const UserSpan = styled.span`
  cursor: pointer;
`

const UserDiv = styled.div`
  position: relative;
  display: inline-block;
  font-weight: 500;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  font-size: 15px;
  border-bottom: 1px solid #d9d9d9;

  input {
    padding: 5px 0;
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 0;

    &[type="submit"] {
      padding: 8px;
      background: rgb(76, 19, 235);
      color: white;
      cursor: pointer;
      transition: 0.3s;
      margin-top: 10px;

      &:hover {
        background: rgb(76, 19, 200);
      }
    }

    &:focus {
      outline: 0
    }
  }

  .infoIcon {
    color: blue;
    width: 20px;
    margin-right: 15px;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`

const Modal = styled.div`
  display: ${({showModal}) => showModal ? 'block' : 'none'};
  padding: 60px 0 20px;
  position: absolute;
  background: white;
  color: black;
  right: -120px;
  top: 45px;
  border-radius: 2px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
  min-width: 260px;
  line-height: 1.6;
  animation: show 0.2s ease-in-out;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: -80px;
    right: -10px;
    left: -10px;
    background: linear-gradient(rgb(15, 9, 90), rgb(76, 19, 235));
    height: 175px;
    z-index: 1;
    border-radius: 0 0 50% 50%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }


  @keyframes show {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const CloseModal = styled.div`
  position: absolute;
  left: 15px;
  top: 5px;
  cursor: pointer;
  font-size: 22px;
  color: white;
  z-index: 3;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2)
  }
`

const UserImage = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: blue;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  font-size: 30px;
  margin: 0 auto 15px;
  position: relative;
  z-index: 3;
  transition: 0.3s;

  &:hover {
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
  }
`