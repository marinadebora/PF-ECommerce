import { Email } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const {email, setEmail} = useState('')
    const {password, setPassword } = useState('')
    return (
        <div>
            <form>
                <div>
                    <input type="text"  />
                </div>
                <div>
                    <input type="password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;