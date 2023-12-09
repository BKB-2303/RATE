import React from 'react';
import ExamPortalHeaderDekstop from './ExamHeaderDekstop';
import DISPLAYQUESTION from'./DisplayQuestion';
import { useNavigate } from 'react-router-dom';



const RatePortal = () => {
 
    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/registration-details/access-page/rate-portal/test-dashboard');
    };
    return (
        <div className="bg-white h-screen">
            {/* Render ExamPortalHeader only on larger screens */}
            <div className="hidden md:block">
                <ExamPortalHeaderDekstop />
      
            </div>
            <div className='bg-stone-950 p-2'></div>
             <DISPLAYQUESTION/>
             <div className="flex justify-center items-center">
  <button className="bg-red-900 text-black px-4 py-2 rounded-full block md:hidden mt-8" onClick={handleDashboard}>
    End Test
  </button>
</div>


        </div>
    );
};

export default RatePortal;
