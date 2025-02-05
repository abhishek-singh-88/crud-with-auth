import React, { useEffect, useMemo, useRef, useState } from 'react'
import validateUser from '../components/ValidateUser'
import { logoutUser, uploadImg } from '../services/auth.services'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import { MdEditSquare } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";


function Profile({user}) {
    const [image, setImage] = useState(null)
  
  const nav = useNavigate()

  async function logout(){
    try {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to access the profile !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout now !"
      }).then(async (result) => {
        if (result.isConfirmed) {
          let res = await logoutUser()
          nav('/signin')
          Swal.fire({
            title: res.message,
            text: "you are logged out from all devices .",
            icon: "success"
          });
        }
      });

      
      
      
    } catch (error) {
        Swal.fire("already logged out ! ", error.message, "warning")
    }
    
  }





    const upload = async (img)=>{
    const formImg =  new FormData()
    formImg.append('img', img[0])

    try {
      let res =  await uploadImg(formImg, user._id)
     
      const srcs2 = `http://localhost:7777/static/${res.img}`
      setImage(srcs2)
  
      Swal.fire(res.message, "", "success")
      
    } catch (error) {
      Swal.fire("Server time out !", "try again after few minutes ", 'error')
    }
  }


  useEffect(() => {
    if (user?.img) {
      setImage(`http://localhost:7777/static/${user.img}`);
    }
    // console.log(user.img);
    
  }, [user]);
  

  // console.log(user.img);
  
  return (
    
    <>
    <div  style={{width:"95%"}} className="container-fluid mb-5 shadow-lg mt-5 p-4  rounded-3 position-relative">
      <button onClick={()=> {
        logout()
       
      }} className='position-absolute top-0 end-0 me-2 mt-2 btn btn-outline-dark'>Logout</button>
      <FaUserShield className='d-block text-success  mx-auto' style={{fontSize:"35px"}} />
    <h3 className='text-center text-muted mb-4'> {user.name.split(" ")[0]}'s Profile</h3>

 
   
    <div className="row  ">
      <div className="col-12 mx-auto  col-sm-8 mb-4  col-md-6 position-relative">
        <label htmlFor="img" className='position-absolute top-0 btn btn-outline-warning ms-3 mt-3'> <MdEditSquare/>
        </label>
        <input onChange={(e)=> upload(e.target.files) } className='d-none' id='img' type="file" />
        
        <img className='object-fit-cover shadow-lg rounded-3 img-fluid' style={{width:"100%",maxHeight:"250px", minHeight:"220px" }} src={image ||`https://t3.ftcdn.net/jpg/06/28/41/90/360_F_628419033_DhXsL6BKRjAfsmunFSGKXXjnnccJddno.jpg`
        } alt="" />
      </div>
      <div className="col-12 bg-light-subtle mx-auto col-sm-8 rounded-3 mb-4 p-4 col-md-6 shadow-lg  ">
        <div className="box  h-100 d-flex justify-content-center align-items-center align-content-center">
          <div className="">
          <h5>Name : <span className='text-muted '>{user.name}  </span></h5> <br />
          <h6 >Email : <span className='text-muted'>{user.email}</span></h6> <br />
          <p><span className='fw-medium'>Location : </span> Adarsh nagar sector 7 lucknow </p>
          </div>
          
        </div>
          
      </div>
    </div>
    </div>
    </>
  )
}

export default validateUser(Profile)