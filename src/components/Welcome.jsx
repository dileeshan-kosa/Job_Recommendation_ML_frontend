// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaBriefcase } from "react-icons/fa";

// const Welcome = () => {
//   // get job past details
//   const [jobdetailsData, setjobdetailstData] = useState([]);

//   const fetchStudentData = async () => {
//     try {
//       const res = await axios.get(`http://localhost:8000/api/get-jobpost`);
//       console.log("Job Details", res.data);
//       setjobdetailstData(res.data.jobPostsFormatted);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, []);

//   return (
//     <div className="flex-1 p-15 flex flex-col items-center justify-center text-center">
//       <h1 className="text-5xl font-extrabold mb-6 text-blue-700">
//         Welcome to Skill Bridge
//       </h1>
//       <p className="text-gray-600 text-lg mb-10 max-w-xl">
//         Connect your skills with the perfect career opportunities.
//       </p>

//       <div className="flex gap-10 justify-center mb-16">
//         <div>
//           <strong className="text-2xl text-green-600">1000+</strong>
//           <p className="text-sm mt-1">Active Jobs</p>
//         </div>
//         <div>
//           <strong className="text-2xl text-purple-600">500+</strong>
//           <p className="text-sm mt-1">Companies</p>
//         </div>
//         <div>
//           <strong className="text-2xl text-red-500">2000+</strong>
//           <p className="text-sm mt-1">Professionals</p>
//         </div>
//       </div>

//       <div className="w-full border-t border-gray-300 pt-8 mt-8">
//         <div className="flex items-center justify-center gap-2 text-blue-800 text-xl font-semibold">
//           <FaBriefcase className="text-2xl" />
//           <span>Available Job Posts</span>
//         </div>
//         <p className="text-gray-500 text-sm mt-2">
//           Browse exciting opportunities posted by top companies.
//         </p>

//         {/* Job Posts */}
//         {/* Job Posts */}
//         {jobdetailsData.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
//             {jobdetailsData.map((job) => (
//               <div
//                 key={job._id}
//                 className="border border-gray-200 rounded-lg p-5 shadow-md text-left"
//               >
//                 <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                   {job.jobroles}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-1">
//                   <strong>Company:</strong> {job.company}
//                 </p>
//                 <p className="text-sm text-gray-600 mb-1">
//                   <strong>Category:</strong> {job.category}
//                 </p>
//                 <p className="text-sm text-gray-600 mb-1">
//                   <strong>Location:</strong> {job.location}
//                 </p>
//                 <p className="text-sm text-gray-700 mt-2">
//                   {job.jobdescription}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-sm mt-6">Nothing to display.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Welcome;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding, FaTag } from "react-icons/fa";

const Welcome = () => {
  // get job past details
  const [jobdetailsData, setjobdetailstData] = useState([]);

  const fetchStudentData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/get-jobpost`);
      console.log("Job Details", res.data);
      setjobdetailstData(res.data.jobPostsFormatted);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans text-gray-900 pb-16">
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
          Welcome to Skill Bridge
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect your skills with the perfect career opportunities. Discover
          roles that match your ambition.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
            <strong className="block text-3xl font-black text-green-500 mb-1">
              1000+
            </strong>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Active Jobs
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
            <strong className="block text-3xl font-black text-purple-500 mb-1">
              500+
            </strong>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Companies
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
            <strong className="block text-3xl font-black text-red-400 mb-1">
              2000+
            </strong>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Professionals
            </p>
          </div>
        </div>
      </div>

      {/* Job Board Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 text-blue-600">
              <FaBriefcase className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Available Opportunities
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              Browse exciting opportunities posted by top companies and
              kickstart your next chapter.
            </p>
          </div>

          {/* Job Posts Grid */}
          {jobdetailsData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobdetailsData.map((job) => (
                <div
                  key={job._id}
                  className="bg-slate-100 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {job.jobroles}
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      <FaBuilding size={10} />
                      {job.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                      <FaTag size={10} />
                      {job.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                      <FaMapMarkerAlt size={10} />
                      {job.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-3 leading-relaxed">
                    {job.jobdescription}
                  </p>

                  {/* Optional Action Area (Future-proofing) */}
                  <div className="mt-6 pt-4 border-t border-gray-50">
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-12 text-center max-w-2xl mx-auto">
              <FaBriefcase className="text-4xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                No jobs posted yet
              </h3>
              <p className="text-gray-500">
                Check back later for new exciting opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
