import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function validateUser(Hoc) {

  return (props) => {
    const nav = useNavigate();
      const [user, setUser] = useState({ name: "", email: "" , _id:"" , img: null  });

    async function matchUser() {
      
      let url = "http://localhost:7777/auth/user/profile";
      try {
        let res = await axios.get(url, { withCredentials: true });
        // console.log(res.data.img);
        
        setUser({ name: res.data.name, email: res.data.email , _id:res.data._id, img: res.data.img});
       
        
      } catch (error) {
        Swal.fire("Please Login first ! ","Token expired / not provided ", "error");
        nav("/signin");
        console.log("error in validate user hoc : ", error.message);
      }
    }
    useEffect(() => {
      matchUser();
    }, []);

    return <Hoc user={user} {...props} />;
  };
}

export default validateUser;
