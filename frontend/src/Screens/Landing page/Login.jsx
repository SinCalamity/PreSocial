import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
 
  
  return (
    <div> 
        <img class='img-fluid' src={`${process.env.PUBLIC_URL}/images/Artist.png`} alt="R"/>
        <div className='contain'>
            <div className='text'>Login</div>
          <div className='inputs'>
            <div className='input'>
            <i class="fa-solid fa-user"></i>
            <input type="text" 
            placeholder='Username'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className='input'>
            <i class="fa fa-key" aria-hidden="true"></i>
            <input type="password"
            placeholder='Password'
            id='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className='remember'>
                <label><input type='checkbox'/>Remember Me</label>
            </div>
        </div>
        
        
        <div>
        <Link to="/ForgotPassword">
        <div className='forgot-password'>Forgot Password?</div>
        </Link>
        </div>
        <div className='submit-container'>
            <a href="/HomePage">
            <div className='continue'>Continue</div>
            </a>
            <LinkContainer to="/SignUp">
            <Nav.Link>Sign Up here</Nav.Link>
            </LinkContainer>
            </div>
        
    </div>
    
    </div>
  )
}

export default Login