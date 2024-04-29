import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Add = () => {



  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user, setuser] = useState(users)

  const navigate = useNavigate()


  const inputHandle = (e)=> {
    const {name,value} = e.target
    setuser({...user, [name]:value});
  }

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((response)=>{
      toast.success(response.data.msg, {position: "top-right"})
      navigate("/read")
    }).catch(error => console.log(error))
  }



  return (
    <>
      <div className='addUser'>
      <Link to={"/read"}>Back</Link>
      <h3>Add new User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">fname : </label>
          <input type="text" onChange={inputHandle} id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">lname : </label> 
          <input type="text" onChange={inputHandle} id='lname' name='lname' autoComplete='off' placeholder='Enter Your Last Name'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email : </label>
          <input type="text" onChange={inputHandle} id='email' name='email' autoComplete='off' placeholder='Enter Your Email'/>
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password : </label>
          <input type="text" onChange={inputHandle} id='password' name='password' autoComplete='off' placeholder='Enter Your Password'/>
        </div>
        <br />
        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Add