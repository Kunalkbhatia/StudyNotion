import signupimg from "../assets/Images/signup.webp"

import Template from "../components/core/Auth/Template";

function Login(){
    return (
        <Template
        title="Welcome Back"
        description1="Build Skills for today, tomorrow, and Beyond"
        description2="Education to future-proof your career"
        image={signupimg}
        formType="signup"
        />
    )
}

export default Login