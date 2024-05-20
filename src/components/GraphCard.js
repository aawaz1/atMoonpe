import React from 'react';

const GraphCard = ({ icon: Icon, amount, colors, percent, total, color }) => {
  const colorClasses = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    green : "bg-green-500",
    purple : "bg-purple-500"
    // Add other color mappings as needed
  };
  
  const bgClasses = {
    customLightRed: 'bg-customLightRed',
    customLightYellow: 'bg-customLightYellow',
    customLightGreen : 'bg-customLightGreen',
    customLightPurple : 'bg-customLightPurple'
    // Add other background color mappings as needed
  };
  return (
    <div className={`bg-${color} w-[80%] md:w-[50%] h-[20%] flex flex-col gap-4 rounded-xl  px-4 py-3`}>
      <div className={`bg-${colors}-500 flex items-center w-[30%] justify-center p-3 rounded-full`}>
        <Icon color='white' fontSize={'1.2rem'} />
      </div>
      <h1 className='font-bold text-xl'>{amount}</h1>
      <h1 className='text-gray-800 font-semibold'>{total}</h1>
      <h2 className='text-blue-400 text-[0.8rem]'>+{percent} from yesterday</h2>
    </div>
  );
};

export default GraphCard;
