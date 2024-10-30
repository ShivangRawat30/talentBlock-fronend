import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import Portfolio from "../../components/Portfolio";
import Skills from "../../components/Skills";
import CardJob from "../../components/CardJob";
// import Modal from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";
import { ImLocation2 } from "react-icons/im";
import { TbWorldCheck } from "react-icons/tb";
import { FaCrown, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const Profile: NextPage = () => {
  const [name, setName] = useState<any>("");
  const [country, setCountry] = useState<any>("");
  const [city, setCity] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [bio, setBio] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completed_works = [
    {
      title: "Design Themes  App",
      start_end_day: "Aug 5, 2023 - Sep 28, 2023",
      review:
        "Outstanding work by Jessica. She exceeded our expectations and delivered high-quality code on time. I highly recommend her for any JavaScript project.",
    },
    {
      title: "Graphic Designer",
      start_end_day: "Mar 10, 2023 - Apr 30, 2023",
      review:
        "I had a fantastic experience working with David. His creativity and attention to detail resulted in stunning designs for our project. I couldn't be happier with the results.",
    },
    {
      title: "Data Scientist Proposal",
      start_end_day: "Jul 1, 2023 - Aug 25, 2023",
      review:
        "Katherine's data analysis skills are impressive. She provided valuable insights from our data and helped us make data-driven decisions. I'm grateful for her expertise.",
    },
  ];
  const createToken = async (e: any) => {
    console.log(
      "name, country, city, title, bio",
      name,
      country,
      city,
      title,
      bio
    );
    e.preventDefault();
  };

  const [metadata, setMetadata] = useState(null);

  const fetchMetadata = async () => {
    try {
      const response = await axios.get(
        `https://brown-acute-xerinae-416.mypinata.cloud/ipfs/QmTTzRSWnoL14qxshW8zaK3Wkdd9vcMsPf7aCSkzz4ETrD`
      );
      setMetadata(response.data);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };
  fetchMetadata();
  console.log(metadata);

  return (
    <div className="h-[10vw] w-[100vw] mx-auto mt-8 bg-[#080813] text-white">
      {/* NEW HEADER  */}
      <div className="w-[100%] h-[20vh] image-fit">
        <img
          src="https://images.unsplash.com/photo-1729555906456-f674bcb8a1a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>

      <section id="header ">
        <div className="flex items-center justify-center bg-[#080813] px-[50px] pr-[100px]">
          <div className="w-1/3  items-center text-center">
            <div className="flex items-center justify-center mt-[-20px] relative inline-block">
              <img
                src="https://brown-acute-xerinae-416.mypinata.cloud/ipfs/QmbPRPhpmQKsuJnqFDESRVrYenndiWh3hLtzkZ4zzrRRgh"
                alt="user"
                className="w-[150px] h-[150px] rounded-full border-4 border-white"
              />
            </div>

            <h1 className="font-bold text-xl">Shivang Rawat</h1>
            <p className="font-semibold text-lg m-1">Web3 Developer</p>
            <div className="flex items-center justify-center">
              <ImLocation2 size="1.2em" fill="gray" />
              <p className="my-1 text-custom-base3">Chicago, USA</p>
            </div>
            <div className="mb-3">
              <p className="m-1 text-sm text-custom-base3">Verifications</p>
              <div className="flex items-center justify-center   space-x-4 pb-2">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorldCheck className="text-green-500 hover:text-green-200" />
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-green-500 hover:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-green-500 hover:text-blue-500" />
                </a>
                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="text-green-500 hover:text-indigo-700" />
                </a>
              </div>
            </div>
            <div className="pb-4">
              <button
                className="bg-[#FF867C] px-8 py-1 text-white font-bold text-lg rounded  "
                onClick={() => setIsModalOpen(true)}
              >
                Hire me
              </button>
            </div>
          </div>

          <div className="w-1/2"></div>

          <div className="w-1/3">
            <div className="flex justify-between items-center">
              {/* <MdVerified size="2em" fill="blue" /> */}
              {/* <h2 className="font-bold text-lg">{`Hour Rate $${dataProfile?.hour_rate}`}</h2> */}
            </div>
            <ProgressBar description="Jobs completion" percentage={100} />
            <ProgressBar description="On budget" percentage={89} />
            <ProgressBar description="On time" percentage={100} />
            <ProgressBar description="Repeat hire rate" percentage={100} />
          </div>
        </div>
      </section>

      {/* main */}
      <div className="flex bg-[#080813] px-[250px] pt-[100px]">
        {/* SIDEBAR */}
        <div className="w-64 p-4 hidden md:block bg-[#080813]">
          <ul>
            <li className="mb-4">
              <a href="#profile" className="block  hover:text-indigo-500 ">
                View Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="#history" className="block  hover:text-indigo-500 ">
                Work History
              </a>
            </li>
            <li className="mb-4">
              <a href="#portfolio" className="block  hover:text-indigo-500 ">
                Portfolio
              </a>
            </li>
            <li className="mb-4">
              <a href="#skills" className="block  hover:text-indigo-500 ">
                Skills
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block  hover:text-indigo-500 ">
                Interests
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block  hover:text-indigo-500 ">
                Reviews
              </a>
            </li>
          </ul>

          {/* overview */}
          <div className=" pt-5">
            <p className="  font-bold mb-1">Hours of work</p>
            <div className="flex justify-between px-4">
              <div className="">
                <p className="font-semibold  m-0"> 5</p>
                <p className="font-semibold  text-xs m-0">Total Jobs</p>
              </div>
              <div className="">
                <p className="font-semibold  m-0">20</p>
                <p className="font-semibold  text-xs m-0">Total Hours</p>
              </div>
            </div>
          </div>
          {/* hours */}
          <div className=" pt-8">
            <p className=" font-bold mb-1">Hours per week</p>
            <p className="font-semibold  text-xs m-0">
              As needed - Open to offers
            </p>
          </div>

          {/* HANDLES  */}
          <div className="pt-8">
            <p className=" font-bold mb-1">Social Profiles</p>
            <div className="flex space-x-4 pb-2">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbWorldCheck className="text-green-600 hover:text-green-200" />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-400 hover:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 hover:text-blue-500" />
              </a>
              <a
                href="https://discord.gg/your-invite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="text-indigo-500 hover:text-indigo-700" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-4">
          {/* {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />} */}
          {/* PROFILE          */}
          <div className="p-2">
            <section className="mt-0 pb-2" id="profile">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">About Me</h1>
              </div>
              <p className="mt-0 text-white tracking-wide block text-justify">Experienced full-stack developer specializing in Web2 and Web3 Technologies</p>
            </section>
            <section className="py-2" id="history">
              <h1 className="font-bold text-lg">Work History</h1>
              <div className="px-1">
                <p className="text-sm m-0"> Completed jobs (3)</p>
                {completed_works.length > 0 ? (
                  completed_works.map((job, idx) => <div className="pt-4 border-b border-gray-800">
                  <h2 className="font-semibold">{job?.title}</h2>
                  <p className="text-sm text-gray-400 m-0">{job?.start_end_day}</p>
                  <p className="mt-1 text-gray-700 tracking-wide  text-justify">{job?.review}</p>
                </div>)
                ) : (
                  <p>No jobs completed</p>
                )}
              </div>
            </section>
            <section className="d" id="portfolio">
              <Portfolio />
            </section>
            <section className="d" id="skills">
              <Skills />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
