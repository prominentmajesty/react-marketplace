import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg';

function ForgotPassword() {

  const [email, setEmail] = useState('');

  const onChange = e => {
    setEmail(e.target.value);
  }

  const onsubmit = async e => {
    
    e.preventDefault();
    try {

      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">
          Forgot password
        </p>
      </header>
      <main>
        <form onsubmit={onsubmit}>
          <input type="email" placeholder='Email' value={email} onChange={onChange} className="emailInput" />
          <Link className='forgotPasswordLink' to='/sign-in'>Sign In</Link>
          <div className="signInBar">
            <div className="signInText">
              Send Reset Link...
            </div>
            <button className="signInButton">
              <ArrowRightIcon fill='white' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword