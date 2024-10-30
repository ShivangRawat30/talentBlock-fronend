import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";
import { useAccount } from 'wagmi';
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();
  const router = useRouter();

  return (
    <>
      {!isConnected ? (
        <div className='w-full h-[100vh] flex text-5xl text-[#F3F4F6] items-center justify-center bg-[#080813]'>

        Please Connect Your Wallet
        </div>
      ) : (
        <div className="px-20 py-20 bg-[#080813] flex justify-center items-center h-[100vh] w-[100vw]">
          <div className="">
            <h1 className="py-20 text-[#F3F4F6] text-center font-bold text-7xl">What Are you looking for</h1>
            <div className="flex gap-[100px] ml-[100px]">
            <button
  onClick={() => router.push("/freelancers")}
  className="bg-custom-primary text-[#E0E0E0] h-[200px] font-black border-[2px] mr-2 px-6 py-5 w-[200px] rounded-xl 
             transition-colors duration-300 text-2xl delay-100 hover:border-0 hover:bg-[#FF867C] cursor-pointer flex flex-col justify-betwee items-center"
>
                <BsFillPeopleFill size={150}/>
                Talent
              </button>
              <button
                onClick={() => router.push("/gigs")}
                className="bg-custom-primary text-[#E0E0E0] h-[200px] font-black border-[2px] mr-2 px-6 py-5 w-[200px] rounded-xl 
                transition-colors duration-300  text-2xl delay-100 hover:border-0 hover:bg-[#FF867C] cursor-pointer flex flex-col justify-betwee items-center"
   >
                <MdOutlineWork size={150}/>
                Gigs
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
