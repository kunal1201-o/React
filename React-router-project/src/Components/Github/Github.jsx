import React, { useEffect,useState, } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
const data = useLoaderData()
// const [data ,setData]=useState([])
//     useEffect(() => {
//      fetch('https://api.github.com/users/kunal1201-o')
//      .then(response=>response.json())
//      .then(data=>{
//         console.log(data)
//         setData(data)
//      }
//         )
//     }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Public Repo : {data.public_repos}
    <img src={data.avatar_url} alt="gitHub pic" width={300}/>
    
    </div>
  )
}

export default Github

export const githubinfo = async ()=>{
    const response= await fetch('https://api.github.com/users/kunal1201-o')
    return response.json()
}