

// import React from 'react';

// const DisplayQ = () => {
//     return (
//         <div className="flex flex-col md:flex-row">
//             {/* Left side div */}
//             <div className="w-full md:w-9/12 p-4 bg-gray-300 mt-10 md:ml-4">
//             {/* Text */}
//             <p className="text-xl  mb-4 text-gray-600">1. What is the full form of RATE?</p>

//             {/* Options A, B, C, D */}
//             <div className="flex flex-col space-y-6 mt-5">
//                 <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">A</button>
//                 <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">B</button>
//                 <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">C</button>
//                 <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">D</button>
//             </div>

//             {/* Additional buttons horizontally */}
//             <div className="flex mt-8 space-x-4">
//                 <button className="bg-green-950 text-white h-12 w-36 rounded-full flex items-center justify-center">Mark for Review</button>
//                 <button className="bg-gray-900 text-white h-12 w-36 rounded-full flex items-center justify-center">Skip & Next</button>
//                 <button className="bg-stone-900 text-white h-12 w-36 rounded-full flex items-center justify-center">Submit & Next</button>
//             </div>
//         </div>

//             {/* Right side div */}
//             <div className="w-full md:w-3/12 p-4 bg-stone-950 mt-10 md:ml-8 ">
//                 {/* Div containing text "Questions" centered */}
//                 <div className="text-center">
//                     <h2 className="text-xl mb-4 text-white">Questions</h2>
//                 </div>

//                 {/* Another div below it */}
//                 <div className='text-white'>
//                     Activity
//                 </div>
//             </div>

            
//         </div>
//     );
// };

// export default DisplayQ;


import React, { useState } from 'react';
import RightIcon from '../../assets/icons-right.png';

const DisplayQ = () => {
  const [showActivity, setShowActivity] = useState(false);

  const toggleActivity = () => {
    setShowActivity(!showActivity);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side div */}
      <div className={`w-full md:w-${showActivity ? '98' : '75'}% p-4 bg-gray-300 mt-10 md:ml-4 transition-all`}>
  {/* Text */}
  <p className="text-xl mb-4 text-gray-600">1. What is the full form of RATE?</p>

  {/* Options A, B, C, D */}
  <div className="flex flex-col space-y-6 mt-5">
    <div className="flex items-center space-x-2">
      <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">A</button>
      <span className="text-gray-800">Option A </span>
    </div>
    <div className="flex items-center space-x-2">
      <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">B</button>
      <span className="text-gray-800">Option B </span>
    </div>
    <div className="flex items-center space-x-2">
      <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">C</button>
      <span className="text-gray-800">Option C </span>
    </div>
    <div className="flex items-center space-x-2">
      <button className="bg-gray-500 text-white h-12 w-12 rounded-full flex items-center justify-center">D</button>
      <span className="text-gray-800">Option D </span>
    </div>
  </div>

  {/* Additional buttons horizontally */}
  <div className="flex mt-8 space-x-4">
    <button className="bg-green-950 text-white h-12 w-36 rounded-full flex items-center justify-center">Mark for Review</button>
    <button className="bg-gray-900 text-white h-12 w-36 rounded-full flex items-center justify-center">Skip & Next</button>
    <button className="bg-stone-900 text-white h-12 w-36 rounded-full flex items-center justify-center">Submit & Next</button>
  </div>
</div>


{/* Right side div */}
<div
  className={`w-full md:w-${showActivity ? '1' : '3'}/12 p-4 bg-stone-950 mt-10 md:ml-8 transition-all`}
>
    
  <div className="text-white" onClick={toggleActivity}>
  <img src={RightIcon} className="w-8" alt="Icon" /> 
    </div>
  <div className="text-center">
  
    <h2 className="text-xl mb-4 text-white text-center">Questions</h2>

  </div>

  {/* Four small boxes */}
  <div className="flex justify-between">
    <div className="bg-gray-500 text-white h-8 w-8 rounded-full flex items-center justify-center">1</div>
    <div className="bg-gray-500 text-white h-8 w-8 rounded-full flex items-center justify-center">2</div>
    <div className="bg-gray-500 text-white h-8 w-8 rounded-full flex items-center justify-center">3</div>
    <div className="bg-gray-500 text-white h-8 w-8 rounded-full flex items-center justify-center">4</div>
  </div>

</div>



    </div>
  );
};

export default DisplayQ;


