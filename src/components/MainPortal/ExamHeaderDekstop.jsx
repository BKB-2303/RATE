// import React from 'react';
// import TransparentLogo from '../../assets/logo-white.png';
// import { useNavigate } from 'react-router-dom';


//     const ExamPortalHeader = () => {
//         const navigate = useNavigate();
    
//         const handleDashboard = () => {
//             // Show an alert when "End Test" button is clicked
//             const shouldEndTest = window.confirm("Are you sure you want to end the test?");
            
//             // If the user clicks "OK," perform the navigation
//             if (shouldEndTest) {
//                 navigate('/registration-details/access-page/rate-portal/test-dashboard');
//             }
//         };
//     return (
//         <nav className="flex items-center justify-between p-4 bg-gray-600 text-white">
//             <div className="navbar-left w-[90%] ">
//                 <div className="upper-left-content flex items-center justify-between mt-2">
//                     {/* Left side content, e.g., logo */}
//                     <img src={TransparentLogo} alt="Logo" className="h-14 w-30" />
                    
//                     {/* Right side content in the upper-left-content */}
//                     <div className="flex items-center space-x-4">
//                         {/* "End Test" button */}
//                         <button className="bg-stone-950 hover:bg-red-200 text-white hover:text-red-500 px-8 py-3 rounded-xl " onClick={handleDashboard}>End Test</button>
                        

//                         {/* Time display box (replace '00:00' with actual time) */}
//                         <div className="bg-white text-black px-8 py-3 rounded">
//                             Time: 00:00
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* Lower left content with four buttons */}
//                 <div className="lower-left-content flex space-x-12 ml-2 mt-5">
//                     <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC A</button>
//                     <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC B</button>
//                     <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC C</button>
//                     <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC D</button>
//                 </div>
//             </div>
//             <div className="navbar-right ">
//                 {/* Right side content, e.g., circular camera shape */}
//                 <div className="h-[120px] w-[120px] bg-white rounded-full flex items-center justify-center">
//                     {/* You can add a camera icon or any other content inside the circle */}
//                     📷
//                 </div>
//              <span>Bikash Borah</span>
//              <br />
//              <span>ID:200710007015</span>

//             </div>
            
//         </nav>
//     );
// };

// export default ExamPortalHeader;

import React, { useState } from 'react';
import TransparentLogo from '../../assets/logo-white.png';
import { useNavigate } from 'react-router-dom';
import endTestSound from '../../assets/end-test-sound.mp3';
const ExamPortalHeader = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const handleDashboard = () => {
//     // Show a custom modal instead of the default alert
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     // Close the custom modal
//     setShowModal(false);
//   };

//   const endTest = () => {
//     // Perform navigation when the user clicks "OK" in the custom modal
//     navigate('/registration-details/access-page/rate-portal/test-dashboard');
//     closeModal();
//   };
const navigate = useNavigate();
const [showModal, setShowModal] = useState(false);

const handleDashboard = () => {
  // Play the end test sound
  const audio = new Audio(endTestSound);
  audio.play();

  // Show a custom modal instead of the default alert
  setShowModal(true);
};

const closeModal = () => {
  // Close the custom modal
  setShowModal(false);
};

const endTest = () => {
  // Perform navigation when the user clicks "OK" in the custom modal
  navigate('/registration-details/access-page/rate-portal/test-dashboard');
  closeModal();
};
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-600 text-white">
      <div className="navbar-left w-[90%] ">
        <div className="upper-left-content flex items-center justify-between mt-2">
          <img src={TransparentLogo} alt="Logo" className="h-14 w-30" />
          <div className="flex items-center space-x-4">
            <button
              className="bg-stone-950 hover:bg-red-200 text-white hover:text-red-500 px-8 py-3 rounded-xl"
              onClick={handleDashboard}
            >
              End Test
            </button>
            <div className="bg-white text-black px-8 py-3 rounded">Time: 00:00</div>
          </div>
        </div>
        <div className="lower-left-content flex space-x-12 ml-2 mt-5">
          <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC A</button>
          <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC B</button>
          <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC C</button>
          <button className="bg-green-200 hover:bg-orange-200 text-gray-600 px-8 py-3 rounded-lg">SEC D</button>
        </div>
      </div>
      <div className="navbar-right ">
        <div className="h-[120px] w-[120px] bg-white rounded-full flex items-center justify-center">
          📷
        </div>
        <span>Bikash Borah</span>
        <br />
        <span>ID: 200710007015</span>
      </div>

      {/* Custom modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
          <div className=" p-8 rounded-lg">
            <p className="mb-4 text-2xl text-gray-800">Are you sure you want to end the test?</p>
            <p className="mb-4 text-xl text-red-400">*This action is irreversible.</p>

            <div className="flex justify-end">
            <button
                className="bg-stone-950 text-white px-4 py-2 mr-2 rounded"
                onClick={endTest}
              >
                OK
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              {/* <button
                className="bg-stone-950 hover:bg-red-200 hover:text-red-500 text-white px-8 py-2 mr-2 rounded"
                onClick={endTest}
              >
                OK
              </button>
              <button
                className="bg-gray-400 hover:bg-green-200 text-white px-8 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ExamPortalHeader;
