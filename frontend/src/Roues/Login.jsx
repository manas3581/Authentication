import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    console.log(form);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-white  px-15 py-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <label
            className="block text-gray-700 text-m font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label
            className="block text-gray-700 text-m font-bold mb-2 mt-3"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Log In
          </button>
        </form>
        <span className="text-sm mt-5 text-gray-700">
          Don't have account{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Register Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
