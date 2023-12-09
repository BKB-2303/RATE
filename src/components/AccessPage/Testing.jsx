import Transparentlogo from '../../assets/logo-white.png';
import Checkedicon from '../../assets/check-mark.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ANIMATION from '../../components/AnimationRate/Animation';
const Access = () => {

  const navigate = useNavigate();
  const [isCameraOn, setCameraOn] = useState(false);
  const [isAudioOn, setAudioOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleToggleCamera = () => {
    // Toggle camera state and turn it on or off accordingly
    setCameraOn(!isCameraOn);
  
    navigator.mediaDevices.getUserMedia({ video: !isCameraOn }) // Use the updated state
      .then((stream) => {
        const videoTracks = stream.getVideoTracks();
        videoTracks.forEach((track) => {
          track.enabled = !isCameraOn; // Use the updated state
        });
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };
  
  const handleToggleAudio = () => {
    // Toggle audio state and turn it on or off accordingly
    setAudioOn(!isAudioOn);
  
    navigator.mediaDevices.getUserMedia({ audio: !isAudioOn }) // Use the updated state
      .then((stream) => {
        const audioTracks = stream.getAudioTracks();
        audioTracks.forEach((track) => {
          track.enabled = !isAudioOn; // Use the updated state
        });
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };
  const handleExamPortal = () => {
    navigate('/registration-details/access-page/rate-portal');
  };

  useEffect(() => {
    const delay = setTimeout(() => {
        setLoading(false);
      }, 2000);
    
      return () => clearTimeout(delay);
    }, []);
    
  return (
    <>{loading && <ANIMATION  />} 
    <div className="bg-white h-screen">
       <header className="bg-gray-600  flex items-center justify-between sm:px-6 ">
        <div className="flex items-center">
          <img src={Transparentlogo} alt="" className=" my-3 w-[142px] h-[48px] md:h-[45px]" />
        </div>
        {/* You can add other header content on the right side if needed */}
     
      </header>
      <div className='bg-stone-900 h-6'></div>
      <div className="mt-6 mx-4 sm:mx-6">
        <p className="text-lg  text-gray-600 font-poppins ">
          *To ensure a smooth testing experience, please make sure your device meets the following requirements:
        </p>
        <ul className="list-decimal list-inside mt-3 ml-4 sm:ml-8">
          <li className=' text-gray-600 '>A working camera is essential for video-based assessments. Please ensure that your camera is functional and positioned correctly.</li>
          <li className='mt-2  text-gray-600   '>Make sure your device's audio settings are enabled. Clear audio is important for instructions and communication during the test.</li>
          <li className='mt-2  text-gray-600 '>A stable internet connection is crucial. We recommend a minimum speed of <span className='text-black'> 512 kbps </span>
          for optimal performance.</li>
        </ul>
      </div>

      <div className="mt-6 mx-4 sm:mx-6 ">
        <p className="mt-4 text-lg  text-gray-600 font-poppins ">
          ***To proceed with the test, please perform the following actions:
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-4 bg-gray-300 py-3 px-4 rounded-md">
        <div className="w-full sm:w-1/3">
          <p className="text-lg font-semibold lg:font-medium font-poppins text-gray-600">Camera:</p>
        </div>
        <div className="w-full sm:w-1/3 text-center mt-2 sm:mt-0">
          <button
            onClick={handleToggleCamera}
            className={`px-4 py-2  hover:bg-gray-600 rounded-md font-poppins ${isCameraOn ? 'bg-green-200 text-white' : 'bg-stone-900 text-white'}`}
          >
            {isCameraOn ? 'Click to Off' : 'Click to On'}
          </button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end items-center">
  {isCameraOn && (
  <div className="w-full sm:w-1/3 flex justify-end items-center">
  {isCameraOn && (
    <div className="flex items-center">
      <img src={Checkedicon} alt="Camera" className="w-10 h-10 mr-2" />
      <span className='text-green-800'>Success</span>
    </div>
  )}
</div>

  )}
</div>

      </div>

      {/* Second Div - Audio */}
      <div className="flex flex-col sm:flex-row items-center mt-4 bg-gray-300 py-3 px-4 rounded-md">
        <div className="w-full sm:w-1/3">
          <p className="text-lg font-semibold lg:font-medium font-poppins  text-gray-600 ">Audio:</p>
        </div>
        <div className="w-full sm:w-1/3 text-center mt-2 sm:mt-0">
          <button
            onClick={handleToggleAudio}
            className={`px-4 py-2 rounded-md  hover:bg-gray-600  font-poppins ${isAudioOn ? 'bg-green-200 text-white' : 'bg-stone-900 text-white'}`}
          >
            {isAudioOn ? 'Click to Off' : 'Click to On'}
          </button>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end items-center">
  {isAudioOn && (
    <div className="flex items-center">
      <img src={Checkedicon} alt="Audio" className="w-10 h-10 mr-2" />
      <span className='text-green-800'>Success</span>
    </div>
  )}
</div>

      </div>

{/* Third Div - Internet Speed */}
<div className="flex flex-col sm:flex-row items-center mt-4 bg-gray-300 py-3 px-4 rounded-md">
  <div className="w-full sm:w-1/3">
    <p className="text-lg font-semibold lg:font-medium font-poppins   text-gray-600 ">Internet Speed:</p>
  </div>
  <div className="w-full sm:w-1/3 text-center mt-2 sm:mt-0">
    <button className="bg-stone-900  hover:bg-gray-600  text-white px-4 py-2 rounded-md font-poppins ">Click to On</button>
  </div>
  <div className="w-full sm:w-1/3 flex justify-end items-center">
    <img src={Checkedicon} alt="Internet Speed" className="w-10 h-10" />
  </div>
</div>
        <div className="mt-6 bg-gray-300  rounded-md">
          <p className="text-black py-8 px-4 sm:px-8 italic">
            *Upon completing the test, you will have the option to submit your responses. Additionally, you can download your question responses for your records. If you encounter any technical issues, please contact our support team at <span className='text-green-400'>supportrate@gmail.com</span>.
          </p>
        </div>

        <div className="mt-2">
          <p className=" py-4 px-4 sm:px-8 font-poppins text-gray-600 ">
            *If you experience an internet disconnection within the test portal, please ensure your Wi-Fi is enabled. You can click here to view and select available networks within the portal.
          </p>
        </div>

        {/* Checkbox and Agreement Text */}
        <div className="mt-4 mx-4 sm:mx-6">
          <label className="flex items-center mt-10">
            <input type="checkbox" className="form-checkbox h-5 w-5" />

            <span className=" font-semibold lg:font-bold text-green-900 font-poppins  ml-4">
              By checking this box, I confirm that I have read and agree to the privacy policy of <span className='text-gray-600'>RATE</span>.
            </span>
          </label>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mx-4 sm:mx-6">
          <button onClick={handleExamPortal} className=" px-6 py-2 mb-12 font-poppins text-xl bg-gray-600 border border-white  text-white rounded-md focus:outline-none hover:bg-green-200 ">
          Start test
          
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Access;
