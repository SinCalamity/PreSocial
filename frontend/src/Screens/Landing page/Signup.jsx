import React, {useState} from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'

//WIP
function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    
    return (
    <div> 
        <img class='img-fluid' src={`${process.env.PUBLIC_URL}/images/Artist.png`} alt="R"/>
        <div className='contain'>
            <div className='text'>SignUp</div>
        <div className='inputs'>
            <div className='input'>
            <i class="fa-solid fa-user"></i>
            <input type="text" 
            placeholder='Username'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className='input'>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <input type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className='input'>
            <i class="fa fa-key" aria-hidden="true"></i>
            <input type="password"
            placeholder='Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            
            <div className='input'>
            <i class="fa fa-key" aria-hidden="true"></i>
            <input type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id='confirm password'/>
            </div>
        </div>
        
        
        <div>
        </div>
        <div className='submit-container'>
            <a href="/NewUser">
            <div className='continue'>Continue</div>
            </a>
            <LinkContainer to="/Login">
            <Nav.Link>Login here</Nav.Link>
            </LinkContainer>
            
            
            
        </div>
    </div>
    
    </div>
)
}   

export default SignUp