import axios from 'axios'


export const signupUser = async (user)=>{
    const res = await axios.post("http://localhost:7777/auth/user/signup", user)
    return res.data
}

export const loginUser = async (user)=>{
    const res = await axios.post("http://localhost:7777/auth/user/login", user, {withCredentials:true})
    return res.data
}


export const logoutUser = async ()=>{
    const res = await axios.post("http://localhost:7777/auth/user/logout", {}, {withCredentials:true})
    return res.data
}


export const uploadImg = async (form, _id)=>{
    const res = await axios.patch(`http://localhost:7777/auth/user/upload-img/${_id}`, form, {withCredentials:true})
    return res.data
}

