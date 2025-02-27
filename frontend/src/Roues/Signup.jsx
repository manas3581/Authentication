import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
        "http://localhost:5000/api/auth/register",
        form
      );
      toast.success(res.data.msg);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
    console.log(form);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-white  px-15 py-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Register Now
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <label
            className="block text-gray-700 text-m font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label
            className="block text-gray-700 text-m font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label
            className="block text-gray-700 text-m font-bold mb-2 mt-3"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Register
          </button>
        </form>
        <span className="text-sm mt-5 text-gray-700">
          Have an account{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
