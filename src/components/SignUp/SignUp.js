import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [error, setError] = useState(null);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
       if(password.length < 6)
       {
            setError('Password should be at least six character');
            return;
        }
        if(password !== confirm)
        {
            setError('Your password did not match');
            return;
        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form onSubmit={handleSubmit}>
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
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Signup" />
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;
