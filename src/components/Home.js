import React, { useState } from 'react'
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import BarChart2 from '../Charts/BarChart2';
import { AiFillPieChart } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import Container from './Container';

import { LuFootprints } from "react-icons/lu";
import { TbChartPieFilled } from "react-icons/tb";
import { FaCarTunnel } from 'react-icons/fa6';
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Graphs from './Graphs';
import Table from './Table';

const Home = () => {
    const [toggleButton , setToggleButton] = useState(1);
    const [isOpen , setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
   
  return (
    <div className='flex '>
        <div className=' hidden w-[18%] lg:flex   flex-col gap-8 p-8'>
            <div className='flex gap-4 justify-start items-center'>
                <button className='bg-customBlue rounded-md p-2'>
                    <LuFootprints color={"white"} fontSize={"2rem"}/>

                </button>
                <h1 className='text-2xl font-bold'>Dabang</h1>
            </div>
           <div className='flex flex-col gap-4'>
           <button onClick={() => setToggleButton(1)} className={`${toggleButton == 1 ? "bg-customBlue rounded-xl p-2 py-3 " : "p-2 py-3" }  w-[80%] flex justify-start items-center gap-4 `}>
                <TbChartPieFilled fontSize={"1.5rem"} className={`${toggleButton == 1 ? "text-white" : "text-gray-500"}`}/>
                <h1 className={`${toggleButton == 1 ?"text-white" : "text-gray-500" } text-lg font-medium`}>Dashboard</h1>



            </button>
            <button onClick={() => setToggleButton(2)} className={`${toggleButton == 2 ? "bg-customBlue rounded-xl px-2 py-3 " : "p-2 py-3" }  w-[80%] flex justify-start items-center gap-4 `}>
                <span>
                    <MdLeaderboard fontSize={"1.3rem"} className={`${toggleButton == 2 ? "text-white" : "text-gray-500"}`}/>

                </span>
                <h1 className={`${toggleButton == 2 ?"text-white" : "text-gray-500" } text-lg font-medium`}>Leaderboard</h1>
            </button>
            <div className='flex flex-col gap-5'>
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
            </div>
          
           </div>
            <div className='bg-customBlue rounded-2xl mt-20 flex flex-col gap-4 justify-center items-center py-6 '>
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
        <Container toggleButton={toggleButton} setToggleButton={setToggleButton} isOpen={isOpen} handleIsOpen={handleIsOpen} />
        <div className='w-[100%] lg:w-[82%] flex flex-col  md:p-2 md:px-6'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-between bg-white  p-2 py-6'>
                <h1 className='hidden lg:block font-bold text-3xl'>Dashboard</h1>
               
                
               <div className='flex justify-around gap-4'>
               <span onClick={handleIsOpen} className='lg:hidden flex justify-center items-center'><TbMenu className='text-customBlue text-[1.5rem]'/></span>
                
               <button className='flex justify-center  gap-3  md:px-4 md:py-2 rounded-md  bg-customBG items-center'>
                    <FaSearch className='text-customBlue text-[1.2rem]'/>
                    <input className='bg-customBG outline-none' placeholder='Search here...'/>
                    </button>
                    
                    <div className='rounded-full flex gap-1 md:gap-3 justify-center items-center'>
                        <img className='rounded-md w-[1.2rem] md:w-[1.5rem] '
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
  <h1 className='text-[0.7rem] md:text-[1rem] '>Eng (US)</h1>
  <span ><RiArrowDropDownLine color='gray' className='text-[1.5rem]' /></span>
  </div>
                    
                    
                   
               </div>
               <div className='flex  justify-evenly md:justify-between gap-4 items-center'>
                
                <button className=' relative flex justify-center  px-1 py-1 rounded-md  bg-orange-100 items-center'>
                   <span className='absolute w-1 h-1 top-1 right-1 bg-red-600 rounded-full text-transparent'>11</span> 
                     <IoMdNotificationsOutline className='text-[1.3rem] md:text-[1.5rem]' color='orange'/>
                     </button>
                     
                     <div className='rounded-md flex gap-3 justify-center items-center'>
                         <img className='rounded-md w-[1.3rem] md:w-[2rem] '
   alt="United States"
   src="https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg"/>
   <div>
    <h1 className='text-[0.8rem] md:text-[1rem] font-semibold'>Musfiq</h1>
    <h2 className='text-gray-400 text-[0.8rem] font-small'>Admin</h2>
   </div>
   <span ><RiArrowDropDownLine color='gray' fontSize={"1.5rem"} /></span>
   </div>
                     
                     
                    
                </div>
                    
            </div>
            <div className='flex'>
                <div className=' w-[100%]'>{toggleButton == 1 ? <Graphs/> :
                 <Table/> }</div>
                
              
                
            </div>
     





    {/* <h1>Visitor Insights</h1>
    <LineChart data={data} />
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <BarChart />
    </div>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <BarChart2 />
    </div> */}
 




 

        </div> 


    </div>
  )
}

export default Home