import React from 'react';

import SignIn from '../../components/sign-in/Sign-in';
import SignUp from '../../components/sign-up//Sign-up';

import './SignIn-SignUp.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;