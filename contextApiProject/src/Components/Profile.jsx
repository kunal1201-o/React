import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {User}=useContext(UserContext);
 if(!User) return <div>PLease Login</div>
 
 return <div>Welcome {User.Username}</div>
  
}

export default Profile