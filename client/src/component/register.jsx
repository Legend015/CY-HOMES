import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import axios from "../utils/axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userInstance, setUserInstance] = useState(null); // State to store the user instance after registration

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data) => {
    // Basic client-side validation
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await axios.post("/api/users/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setUserInstance(response.data); // Set the user instance after successful registration
      // Handle successful registration (e.g., redirect, show success message)
    } catch (error) {
      console.error("Registration error", error.response?.data);
      // Handle registration errors
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Input */}
          <div>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
                {...register("username", { required: "Username is required" })}
                className="w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineMail className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                {...register("password", { required: "Password is required" })}
                className="w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <div className="flex items-center border-b border-gray-300">
              <AiOutlineLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                {...register("confirmPassword", { required: "Please confirm your password" })}
                className="w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>

          {/* Long Button */}
          <button
            type="button"
            className="w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Long Button Example
          </button>
        </form>

        {/* Display User Instance after Registration */}
        {userInstance && (
          <div className="mt-6 p-4 border border-gray-300 rounded-md">
            <h3 className="font-semibold">Registered User:</h3>
            <pre className="text-sm mt-2">{JSON.stringify(userInstance, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
