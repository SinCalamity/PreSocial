import React from 'react'
//forgot password
function ForgotPassword() {
return (
    <div>
        <img class='img-fluid' src={`${process.env.PUBLIC_URL}/images/BroWithLightStick.png`} alt="R"/>
    <div className='forgot-screen'>Please enter your e-mail address
    <input 
    type='email'
    required
    />
    </div>
    Continue
    </div>
)
}

export default ForgotPassword