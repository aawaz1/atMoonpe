
import React from 'react';
import { CiExport } from "react-icons/ci";
import { BsFileBarGraph } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import GraphCard from './GraphCard';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import CustomerSatisfactionChart from '../Charts/CustomerChart';
import BarChart2 from '../Charts/BarChart2';
import { IoBagOutline } from "react-icons/io5";
import TopProducts from '../Charts/TopProducts';

import VolumeServiceChart from '../Charts/Volumechart';

const Graphs = () => {
    const data = [
        { month: 'Jan', loyal: 200, new: 300, unique: 100 },
        { month: 'Feb', loyal: 300, new: 200, unique: 200 },
        { month: 'Mar', loyal: 250, new: 300, unique: 150 },
        { month: 'Apr', loyal: 350, new: 250, unique: 300 },
        { month: 'May', loyal: 300, new: 350, unique: 250 },
        { month: 'Jun', loyal: 400, new: 300, unique: 350 },
        { month: 'Jul', loyal: 350, new: 400, unique: 300 },
        { month: 'Aug', loyal: 300, new: 350, unique: 250 },
        { month: 'Sep', loyal: 250, new: 300, unique: 200 },
        { month: 'Oct', loyal: 300, new: 250, unique: 150 },
        { month: 'Nov', loyal: 350, new: 200, unique: 100 },
        { month: 'Dec', loyal: 400, new: 300, unique: 200 },
      ];
  return (
    <div className='bg-customBG flex flex-col justify-center items-center gap-3  py-6 p-2'>
      <div className='flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row px-2  w-[100%] gap-4'>
        <div className='bg-white rounded-lg w-[80%] lg:w-[70%]  space-y-6 p-4 lg:px-6'>
          <div className='w-[100%] px-2 flex justify-between items-center'>
            <div>
              <h2 className='text-black font-bold text-lg'>Today's Sales</h2>
              <h2 className='text-gray-300 font-semibold text-[1rem]'>Sales Summary</h2>
            </div>
            <div className='border gap-3 px-2 py-1 rounded-lg flex justify-center items-center border-gray-300'>
              <span><CiExport/></span>
              <h1 className='text-gray-500 font-semibold'>Export</h1>
            </div>
          </div>
          <div className='flex justify-center items-center lg:justify-start lg:items-start flex-col lg:flex-row gap-6 '>
            <GraphCard  icon={BsFileBarGraph} color="customLightRed" amount='$1k' total="Total Sales" colors="red" percent="8%"/>
            <GraphCard icon={LuFileSpreadsheet} color="customLightYellow" amount='300' total="Total Orders" colors="orange" percent="5%"/>
            <GraphCard icon={IoIosPricetag} color="customLightGreen" amount='5' total="Product Sold" colors="green" percent="1.3%"/>
            <GraphCard icon={MdOutlinePersonAddAlt} color="customLightPurple" amount='8' total="New Customers" colors="purple" percent="0.5%"/>
          </div>
        </div>
        <div className='w-[100%] lg:w-[30%] bg-white rounded-lg'>
        <div className='w-[100%] px-2 py-2 flex flex-col justify-start'>
            
              <h2 className='text-black font-bold text-lg'>Visitor's Insight</h2>
              <span className='w-[100%]'><LineChart data={data}/></span>
              <div className='flex gap-3 justify-center items-center'>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='bg-purple-700 rounded-sm text-transparent h-4 w-4'>2</span>
                    <h1 className='text-sm'>Loyal </h1>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='bg-red-700 rounded-sm text-transparent h-4 w-4'>2</span>
                    <h1 className='text-sm'>New</h1>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='bg-green-700 rounded-sm text-transparent h-4 w-4'>2</span>
                    <h1 className='text-sm'>Unique</h1>
                </div>
              </div>

              
            </div>

        </div>
      </div>
      <div className='flex flex-col lg:flex-row px-2 gap-3 w-[100%]'>
        <div className='w-[100%] lg:w-[40%] overflow-x-scroll lg:overflow-hidden bg-white rounded-lg p-2'>
        <h2 className='text-black font-bold text-lg'>Total Revenue</h2>
        <div >
      <BarChart />
    </div>
    <div className="flex justify-center gap-2 items-center">
        <button className='text-transparent rounded-full bg-blue-500 h-3 w-3'>2</button>  <span>Online Sales</span>
        <button className='text-transparent rounded-full bg-green-600 h-3 w-3'>2</button>  <span>Offline Sales</span>
    </div>
        </div>
        <div className='w-[100%] lg:w-[30%] bg-white rounded-lg p-2'>
        <h2 className='text-black font-bold text-lg'>Customer Satisfaction</h2>
        <div>
        <CustomerSatisfactionChart/>
    </div>
    <div className='flex flex-col'>
        <div className='flex gap-2 justify-center items-center'>
        <button className='text-transparent rounded-full bg-customBlue h-3 w-3'>2</button> 
        <span className='text-gray-800'>Last Month</span>
        <span className='text-gray-800'>|</span>
        <button className='text-transparent rounded-full bg-green-700 h-3 w-3'>2</button> 
        <span className='text-gray-800'>This Month</span>
        </div>
        


    </div>
            
        </div>
        <div className='w-[100%] lg:w-[30%] bg-white rounded-lg p-2'>
        <h2 className='text-black font-bold text-lg'>Total Revenue</h2>
            <div><BarChart2/></div>
            <div className='flex gap-2 flex-col'>
                <div className='flex justify-center gap-2 items-center'>
                    <button className='bg-green-400 p-1 rounded-lg'> <span><IoBagOutline className='text-green-600'/></span></button>
                    <div>
                        <h2 className='text-sm font-bold'>Reality Sales</h2>
                        
                    </div>
                    <span className='text-green-900'>8.823</span>
                </div>
                <div className='flex justify-center gap-2 items-center'>
                    <button className='bg-orange-200 p-1 rounded-lg'> <span><IoBagOutline className='text-orange-600'/></span></button>
                    <div>
                        <h2 className='text-sm font-bold'>Target Sales</h2>
                        
                    </div>
                    <span className='text-yellow-500'>12.122</span>
                </div>

            </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row px-2 justify-around gap-3 w-[100%]'>
        <div className='w-[100%] lg:w-[50%]'>
            <TopProducts/>
        </div>
        <div className='w-[100%] lg:w-[50%] bg-white rounded-lg'><VolumeServiceChart/></div>

      </div>
    </div>
  );
};

export default Graphs;
