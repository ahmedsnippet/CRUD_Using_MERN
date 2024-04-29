import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Read = () => {

  const [users, setusers] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/read")
      setusers(response.data);
    }

    fetchData();
  }, [])


  const deleteUser = async (userId) =>{
    await axios.delete(`http://localhost:8000/api/delete/${userId}`)
    .then((response)=>{
      setusers((prevUser)=> prevUser.filter((user)=>user._id !== userId))
      toast.success(response.data.msg, {position:'top-right'})
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={15} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>fname</th>
              <th>lname</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.fname} </td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    {/* <td>{user.password}</td> */}
                    <td className='actionButton'>
                      <button onClick={()=> deleteUser(user._id)}><i className='fa-solid fa-trash'></i></button>
                      <Link to={`/edit/` + user._id}><i className='fa-solid fa-pen-to-square'></i></Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read