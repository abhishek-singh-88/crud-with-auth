import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../services/auth.services.js";
import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required().email().min(8).max(25),
  password: yup.string().required().min(6).max(12),
});

function Login({ setValue }) {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function login(data) {
    const user = { email: data.email, password: data.password };
    console.log(user);

    try {
      let res = await loginUser(user);
      console.log(res);
      Swal.fire(res.message, "welcome to the world of HYDRA_ABNK ", "success");
      nav("/profile");
    } catch (error) {
      Swal.fire("Invalid credentials ", "you are not a valid user ", "error");
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-8 col-md-6 col-lg-4 bg-light rounded-3 mx-auto shadow p-4 mt-4 ">
          <div className="text-center text-info" style={{ fontSize: "50px" }}>
            <FaRegUser className="" />
          </div>
          <h4 className="text-center text-success ">Welcome Back ! </h4>
          <form onSubmit={handleSubmit((d) => login(d))}>
            <input
              {...register("email")}
              className="form-control mt-3 "
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <input
              {...register("password")}
              className="form-control mt-3 "
              type="password"
              placeholder="password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
            <button className="btn btn-success mt-4">Login</button>
            <br />
            <p>
              Don't have account ?{" "}
              <span
                style={{ cursor: "pointer" }}
                className="text-info"
                onClick={(e) => setValue("signup")}
              >
                sign up{" "}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
