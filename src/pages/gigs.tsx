import type { NextPage } from 'next';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from "next/link";
import { jobsData } from "../../jobsData";
import { useRouter } from 'next/router';

const gigs: NextPage = () => {
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
      setUsers(jobsData);
    }, [users]);
    const router = useRouter();


    return(
        <div className="px-20 py-16 bg-custom-white bg-[#080813] text-white flex items-center h-[100vh] flex-col justify-center pt-[100px]">
        <div className="py-[100px]">
          {/* <button className="bg-[#FF867C] w-[55vw] h-[50px] rounded-xl" onClick={() => router.push("/opening")}>Create An Opening</button> */}
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-custom-base3 max-w-screen-3xl">
        {users?.length > 0 ? (
          users.map((user: any) => (
            <div
              className="px-4 py-4  border border-solid border-gray-300 shadow-md grid-item text-center  -center items-center"
              key={user.user_id}
            >
                <div className='flex justify-between'>
                <p className="mt-[0px] mb-[1px] font-semibold text-right font-lg">{user.projectDuration}</p>
              <p className="mt-[0px] mb-[1px] font-semibold text-right font-lg">${user.totalAmount}</p>
                </div>
              <h1 className="font-bold text-2xl mt-3 text-custom-base4">{user.role}</h1>

              <div className="flex text-center justify-center items-center">
                <span className="ml-2">
                  {" "}
                  {/* {`$${user.rating}`}/5 ({user.jobs_completed} jobs) */}
                </span>
              </div>
              <div>
                <div className="flex text-center justify-center items-center mt-3">
                  <span className="ml-1 text-sm">{user.jobDescription} </span>
                </div>
              </div>
              <div className="flex justify-center text-center items-center gap-1">
              </div>
              <Link href={`/profile/${user.user_id}`} className='mt-10'>
                <button className="border-2 mt-2 hover:border-0 hover:bg-[#FF867C] bg-custom-primary rounded-md text-white py-2 px-4">Apply</button>
              </Link>
            </div>
          ))
        ) : (
          <h1>No users available</h1>
        )}
      </div>
    </div>
    )
}

export default gigs;