import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {

  const users = {
    fname : "",
    lname : "",
    email : "",
    password : ""
  }

  const {id} = useParams(); //url Sy id fetch Krta hai

  const navigate = useNavigate()

  const [user, setuser] = useState(users);


  const inputChangeHandle = (e) => {
    const {name, value} = e.target;
    setuser({...user, [name]: value});
    // console.log(user)
  }

  useEffect(()=>{
    axios.put(`http://localhost:8000/api/update/${id}`)
    .then((response)=> {
      setuser(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[id])

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user)
    .then((response)=>{
      toast.success(response.data.msg, {position: "top-right"})
      navigate("/read")
    }).catch(error => console.log(error))
  }



  return (
    <>
      <div className='addUser'>
        <Link to={"/read"}>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="fname">fname : </label>
            <input type="text" value={user.fname} onChange={inputChangeHandle} id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name' />
          </div>
          <div className="inputGroup">
            <label htmlFor="fname">lname : </label>
            <input type="text" value={user.lname} onChange={inputChangeHandle} id='lname' name='lname' autoComplete='off' placeholder='Enter Your Last Name' />
          </div>
          <div className="inputGroup">
            <label htmlFor="fname">Email : </label>
            <input type="text" value={user.email} onChange={inputChangeHandle} id='email' name='email' autoComplete='off' placeholder='Enter Your Email' />
          </div>
          <br />
          <div className="inputGroup">
            <button type="submit">UPDATE USER</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Edit