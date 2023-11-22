import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
const Login = () => {
    const [Username, setUsername] = React.useState(null);
    const [Password, setPassword] = React.useState(null);

    const {setUser} =useContext(UserContext)
const handleSubmit = (e)=>{
  e.preventDefault();
  setUser({Username,Password})
}
  return (
    <div>
         <h1>Log in</h1>
        <input type="text" value={Username} placeholder='Please enter username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="text" value={Password} placeholder='Please enter username' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login