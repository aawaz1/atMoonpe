import { MdLeaderboard } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";

import { LuFootprints } from "react-icons/lu";
import { TbChartPieFilled } from "react-icons/tb";
import { FaCarTunnel } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";

const  Cartmenu = ({toggleButton ,setToggleButton ,handleIsOpen}) => {
    const handleClick1 = () => {
        setToggleButton(1);
        handleIsOpen();
      };
      const handleClick2 = () => {
        setToggleButton(2);
        handleIsOpen();
      };
   
    
  return (
    <div className='  flex   flex-col gap-8 p-8'>
        <div>
        <h1 className='text-gray-600 text-[1rems] flex justify-end items-end'onClick={handleIsOpen}><RxCross2/></h1>
            </div>
    <div className='flex gap-4 justify-start items-center'>
        <button className='bg-customBlue rounded-md p-2'>
            <LuFootprints color={"white"} fontSize={"2rem"}/>

        </button>
        <h1 className='text-2xl font-bold'>Dabang</h1>
        
    </div>
    <button onClick={handleClick1} className={`${toggleButton == 1 ? "bg-customBlue rounded-xl p-2 py-3 " : "p-2 py-3" }  w-[80%] flex justify-start items-center gap-4 `}>
        <TbChartPieFilled fontSize={"1.5rem"} className={`${toggleButton == 1 ? "text-white" : "text-gray-500"}`}/>
        <h1 className={`${toggleButton == 1 ?"text-white" : "text-gray-500" } text-lg font-medium`}>Dashboard</h1>



    </button>
    <button onClick={handleClick2} className={`${toggleButton == 2 ? "bg-customBlue rounded-xl p-2 py-3 " : "p-2 py-3" }  w-[80%] flex justify-start items-center gap-4 `}>
        <span>
            <MdLeaderboard fontSize={"1.3rem"} className={`${toggleButton == 2 ? "text-white" : "text-gray-500"}`}/>

        </span>
        <h1 className={`${toggleButton == 2 ?"text-white" : "text-gray-500" } text-lg font-medium`}>Leaderboard</h1>
    </button>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <MdOutlineShoppingCart fontSize={"1.3rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Order</h1>
    </div>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <IoBagHandleOutline fontSize={"1.3rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Products</h1>
    </div>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <MdOutlineAutoGraph fontSize={"1.3rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Sales Report</h1>
    </div>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <RiMessage2Line fontSize={"1.3rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Messages</h1>
    </div>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <CiSettings fontSize={"1.5rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Settingss</h1>
    </div>
    <div className='flex gap-6 justify-start   items-center px-1'>
        <span>
            <MdOutlineLogout fontSize={"1.5rem"} className='text-gray-500'/>

        </span>
        <h1 className='text-lg font-semibold text-gray-500'>Sign Out</h1>
    </div>
    <div className='bg-customBlue rounded-2xl flex flex-col gap-4 justify-center items-center py-6 '>
        <button className='bg-white rounded-md p-1'>
            <LuFootprints fontSize={"1.5rem"} className='text-customBlue'/>

        </button>
        <h1 className='text-xl font-semibold text-white'>Dabang Pro</h1>
        <h1 className='text-[0.8rem] text-center font-thin text-white'>Get Access To All <br/> Features on Tetrambus</h1>
        <button className='text-customBlue font-semibold bg-white px-6 py-1 rounded-md'>
            Get Pro
            </button>

    </div>
    

    


</div>
  )
}

export default Cartmenu