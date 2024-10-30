import type { NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const opening: NextPage = () => {
    const [name, setName] = useState<any>("");
  const [country, setCountry] = useState<any>("");
  const [city, setCity] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [bio, setBio] = useState<any>("");
    const router = useRouter();

      return (
        <div className="flex items-center justify-center bg-[#080813] w-[100vw] h-[100vh]">
        <div className="w-[500px] bg-white/90 p-8 backdrop-blur-sm backdrop-filter bg-opacity-90 rounded-lg shadow-md">

            <h1 className="font-semibold text-2xl mb-8">Create Job Opening</h1>
            <form action="onSubmit" className="flex flex-col space-y-2 ">
              {/* Name */}
              <label className="text-md font-semibold" htmlFor="name">
                Role
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter The Role"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#FF867C] "
                onChange={e => setName(e.target.value)}
              />
              {/*  BOTH*/}
              <div className="flex items-center justify-between">
                {/*  Country*/}
                <div className="w-1/2 flex flex-col mt-6">
                  <label htmlFor="Country" className="text-md font-semibold">
                    Total Amount
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={country}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#FF867C]  w-[95%]"
                    onChange={e => setCountry(e.target.value)}
                  />
                </div>
                {/*  City*/}
                <div className="w-1/2  flex flex-col mt-6">
                  <label htmlFor="city" className="text-md font-semibold">
                    Project Duration(days)
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={e => {
                      setCity(e.target.value);
                    }}
                    className="px-4 py-2  border rounded-md focus:outline-none focus:ring focus:border-[#FF867C] "
                  />
                </div>
              </div>
              {/*  Position Title */}
              <label htmlFor="title" className="text-md font-semibold pt-6">
                About the company
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#FF867C] "
              />
              {/*  Bio */}
              <label htmlFor="bio" className="text-md font-semibold pt-6">
                Job Description
              </label>
              <textarea
                name="bio"
                id="bio"
                value={bio}
                onChange={e => setBio(e.target.value)}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#FF867C] pb-6"
              />
              <div className="p-1">To Create a new job opening you have to pay 20% of total amount to escrow upfornt for future scam protection</div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-[#FF867C] focus:outline-none focus:ring focus:border-blue-500 "
                onClick={() => router.push("/gigs")}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      );
};

export default opening;
