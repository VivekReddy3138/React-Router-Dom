import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
     <form>
        <h2>Login</h2>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Passwor</label>
            <input></input>
        </div>
        <div>
            <button>Login</button>
      
        </div>
     </form>
     <br></br>
     <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login
