// // user login part

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setData((preve) => {
//       return {
//         ...preve,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:8000/api/signin`,
//         data,
//         {
//           withCredentials: true,
//         }
//       );
//       if (response.data.success) {
//         toast.success(response.data.message);
//         localStorage.setItem("userId", response?.data?.details._id);
//         navigate("/dashbord");
//       }

//       if (response.data.error) {
//         toast.error(response.data.message);
//       }
//       console.log("Update response:", response);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   console.log("data", data);

//   return (
//     <div className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100">
//       <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
//           Login to Skill Bridge
//         </h2>

//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleOnChange}
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Password</label>
//             <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 name="password"
//                 value={data.password}
//                 onChange={handleOnChange}
//                 className="w-full px-4 py-2 rounded-l focus:outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="px-3 text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition"
//           >
//             Login
//           </button>

//           <p className="mt-4 text-sm text-center text-gray-600">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/signin`,
        data,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("userId", response?.data?.details._id);
        navigate("/dashbord"); // Note: You might want to fix this typo to "/dashboard" if it's misspelled in your router!
      }

      if (response.data.error) {
        toast.error(response.data.message);
      }
      console.log("Update response:", response);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    // Added 'w-screen' here so the background covers the full width
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Log in to access Skill Bridge
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                placeholder="you@example.com"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-colors"
              />
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  to="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Sign in
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
