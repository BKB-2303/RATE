
import TransparentLogo from '../../assets/logo-black.png';
import SuccessLogo from '../../assets/success.png';
import FacebookLogo from '../../assets/facebook.png';
import WhatsAppLogo from '../../assets/whatsapp.png';
import InstagramLogo from '../../assets/instagram.png';
import TwitterLogo from '../../assets/twitter.png';
import YouTubeLogo from '../../assets/youtube.png';
import ANIMATION from '../../components/AnimationRate/Animation';
import React, { useState, useEffect } from 'react';
const SubmitPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
        setLoading(false);
      }, 3000);
    
      return () => clearTimeout(delay);
    }, []);
    
  return (
    <>{loading && <ANIMATION  />}
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center h-20">
        <img src={TransparentLogo} alt="Logo" className="h-20 mt-20" />
      </header>
      <div className="flex-grow p-20">
        <div className="p-20 rounded-md mt-3 text-center">
          <p className=''>Thank you for completing the assessment!</p>
          <p className=''>Your responses have been recorded.</p>
          <img src={SuccessLogo} alt="Success" className="mx-auto mb-4 h-[100px]" />
          <p className='text-gray-600 text-xl'>Best of luck on your journey ahead!</p>
        </div>
      </div>
      <footer className="fixed bottom-0 flex flex-col items-center p-4 bg-gray-600 text-white w-full ">
        <div className="flex justify-between w-full">
          <div>
            <a href="#" className="mr-4 text-gray-400 underline hover:text-green-200">Home</a>
            <a href="mailto:your@email.com" className='text-gray-400 underline hover:text-green-200'>supportrate@gmail.com</a>
          </div>
          <div className="flex items-center">
            <a href="facebook-link" className="mr-4">
              <img src={FacebookLogo} alt="Facebook" className="h-6" />
            </a>
            <a href="whatsapp-link" className="mr-4">
              <img src={WhatsAppLogo} alt="WhatsApp" className="h-6" />
            </a>
            <a href="instagram-link" className="mr-4">
              <img src={InstagramLogo} alt="Instagram" className="h-6" />
            </a>
            <a href="twitter-link" className="mr-4">
              <img src={TwitterLogo} alt="Twitter" className="h-6" />
            </a>
            <a href="youtube-link">
              <img src={YouTubeLogo} alt="YouTube" className="h-6" />
            </a>
          </div>
        </div>
        <hr className="my-4 w-full border-t border-gray-400" />
        <p className="text-gray-400 p-5">All rights reserved &copy; 2023 RATE</p>
      </footer>
    </div>
    </>
  );
};

export default SubmitPage;
