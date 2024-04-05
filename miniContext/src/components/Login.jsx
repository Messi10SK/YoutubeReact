import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext.js'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

// hook useContext liya hai
//  const {setUser} = useContext(UserContext)
// Usercontext ke andr value kaise fetch hogi 
// value fetch hogi useContext HOOK ke dwara 
// user se leke data lelu
// agar user mein kuch add krna hai to setuser se krdouanga
// set user ka access mujhe  const {setUser} = useContext(UserContext) ye line se mil rha hai
// isi tarah data send hota hai (setuser se)
// aur data receivwe same work (user) se lelo