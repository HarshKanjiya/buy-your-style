import SignInForm from "../../components/sign in form/signIn.component";
import SignUpform from "../../components/sign up form/signUp.component";

import './auth.styles.scss';

const Auth = () => {

    return (
        <div className="container">
            
        <SignInForm/>
        <SignUpform/>
        </div>
    )
}

export default Auth;