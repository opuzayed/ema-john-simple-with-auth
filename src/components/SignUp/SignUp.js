import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Enter your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='confirm your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Signup" />
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;
