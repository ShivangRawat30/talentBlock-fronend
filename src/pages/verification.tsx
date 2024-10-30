// import type { NextPage } from 'next';
// import { useState } from 'react';
// import axios from 'axios';

// const Profile: NextPage = () => {
//     const [name, setName] = useState<any>("");
//   const [country, setCountry] = useState<any>("");
//   const [city, setCity] = useState<any>("");
//   const [title, setTitle] = useState<any>("");
//   const [bio, setBio] = useState<any>("");
//     const createToken = async (e: any) => {
//         console.log("name, country, city, title, bio", name, country, city, title, bio);
//         e.preventDefault();
//       };

//       return (
//         <div className="flex items-center justify-center bg-[#080813] w-[100vw] h-[100vh]">
//         <div className="w-[500px] bg-white/90 p-8 backdrop-blur-sm backdrop-filter bg-opacity-90 rounded-lg shadow-md">

//             <h1 className="font-semibold text-2xl mb-8">Create Your Profile</h1>
//             <form action="onSubmit" className="flex flex-col space-y-2 ">
//               {/* Name */}
//               <label className="text-md font-semibold" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={name}
//                 placeholder="Enter your name"
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 "
//                 onChange={e => setName(e.target.value)}
//               />
//               {/*  BOTH*/}
//               <div className="flex items-center justify-between">
//                 {/*  Country*/}
//                 <div className="w-1/2 flex flex-col mt-6">
//                   <label htmlFor="Country" className="text-md font-semibold">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     name="country"
//                     id="country"
//                     value={country}
//                     className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-50  w-[95%]"
//                     onChange={e => setCountry(e.target.value)}
//                   />
//                 </div>
//                 {/*  City*/}
//                 <div className="w-1/2  flex flex-col mt-6">
//                   <label htmlFor="city" className="text-md font-semibold">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     value={city}
//                     onChange={e => {
//                       setCity(e.target.value);
//                     }}
//                     className="px-4 py-2  border rounded-md focus:outline-none focus:ring focus:border-blue-500 "
//                   />
//                 </div>
//               </div>
//               {/*  Position Title */}
//               <label htmlFor="title" className="text-md font-semibold pt-6">
//                 Job Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 "
//               />
//               {/*  Bio */}
//               <label htmlFor="bio" className="text-md font-semibold pt-6">
//                 Your Biography
//               </label>
//               <textarea
//                 name="bio"
//                 id="bio"
//                 value={bio}
//                 onChange={e => setBio(e.target.value)}
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 pb-6"
//               />
//               <div className="p-1"></div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500 "
//                 onClick={createToken}
//               >
//                 Create
//               </button>
//             </form>
//           </div>
//         </div>
//       );
// };

// export default Profile;
