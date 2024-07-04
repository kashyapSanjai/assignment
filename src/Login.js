import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import i18n from './i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const validCorporateDomains = ["noventiq.com", "examplecorp.com"]; // Add more valid corporate domains here
const invalidDomains = ["gmail.com", "outlook.com", "yahoo.com"];

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    console.log(data);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailDomain = email.split('@')[1];
    return validCorporateDomains.includes(emailDomain) && !invalidDomains.includes(emailDomain);
  };

  return (
    <div className="login-container">
      <img src={'/images/logo.svg'} alt="Noventiq Logo" />
      {/* <h1>{i18n.t('title')}</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
        <div className="form-group">
          <label className='block_lable'>{i18n.t('email')} :</label>
          <input
            className='form-control'
            type="email"
            {...register('email', { required: true, validate: validateEmail })}
            placeholder={i18n.t('emailPlaceholder')}
          />
          
        </div>
        <div className="form-group error-msg">{errors.email && <span >{i18n.t('invalidEmail')}</span>}</div>
        <div className="form-group">
       
          <label  className='block_lable'>{i18n.t('password')} :</label>
            <input
              className='form-control'
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <button type="button" onClick={toggleShowPassword} className="eye-button">
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          {errors.password && <span>{i18n.t('requiredPassword')}</span>}
        </div>
        <div className="form-group">
          <label  className='block_lable'>{i18n.t('language')} :</label>
          <select
            className='form-control'
            {...register('language')}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">{i18n.t('english')}</option>
            <option value="hi">{i18n.t('hindi')}</option>
            <option value="bn">{i18n.t('bengali')}</option>
            {/* Add more languages here */}
          </select>
        </div>
        <div className="form-group">
          <label>
          </label>
          <label>
            <input type="checkbox" {...register('rememberMe')} />
          </label>
            <span>{i18n.t('rememberMe')}</span> 
        </div>
        </div>
        <button type="submit">{i18n.t('login')}</button>
      </form>
      <div className='copyright'><p>Copyright 2024 Noventiq | Powered By Noventiq</p></div>
    </div>
  );
};

export default Login;
