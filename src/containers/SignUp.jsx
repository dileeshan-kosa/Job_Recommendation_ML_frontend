// // User register

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { toast } from "react-toastify";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
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
//     if (data.password === data.confirmpassword) {
//       try {
//         const response = await axios.post(
//           `http://localhost:8000/api/signup`,
//           data,
//           {
//             withCredentials: true,
//           }
//         );
//         if (response.data.success) {
//           toast.success(response.data.message);
//           navigate("/");
//         }

//         if (response.data.error) {
//           toast.error(response.data.message);
//         }

//         // console.log("Update response:", response);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     } else {
//       console.log("Please check password and confirm password");
//     }
//   };
//   console.log("data", data);

//   return (
//     <div className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100">
//       <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
//           Create an Account
//         </h2>

//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={data.name}
//               onChange={handleOnChange}
//               placeholder="Enter your full name"
//               required
//               className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleOnChange}
//               placeholder="Enter your email"
//               required
//               className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
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
//                 required
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

//           {/* Confirm Password */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-2">Confirm Password</label>
//             <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm your password"
//                 name="confirmpassword"
//                 value={data.confirmpassword}
//                 onChange={handleOnChange}
//                 required
//                 className="w-full px-4 py-2 rounded-l focus:outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="px-3 text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={handleSubmit}
//             type="submit"
//             className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
//           >
//             Sign Up
//           </button>

//           <p className="mt-4 text-sm text-center text-gray-600">
//             Already have an account?{" "}
//             <Link to="/login" className="text-purple-600 hover:underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
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

    if (data.password === data.confirmpassword) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/signup`,
          data,
          {
            withCredentials: true,
          },
        );
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/"); // Assuming this goes to the login page
        }

        if (response.data.error) {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred during sign up. Please try again.");
      }
    } else {
      // Changed from console.log to toast.error for better user feedback
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">Join Skill Bridge today</p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                placeholder="John Doe"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-colors"
              />
            </div>

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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
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

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  value={data.confirmpassword}
                  onChange={handleOnChange}
                  placeholder="••••••••"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showConfirmPassword ? (
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
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all"
          >
            Log in instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
