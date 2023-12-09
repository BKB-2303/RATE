import React from 'react';
import Header from './HeaderRate';
import Banner from './BannerRATE';
import Footer from './FooterRate';
import img1 from '../../assets/image1.png'
import video from "../../assets/Rate_tutorial.mp4"
import { useNavigate } from 'react-router-dom';
const colors = {
  'red': 'bg-red-200',
  'orange': 'bg-orange-200',
  'yellow': 'bg-yellow-200',
  'blue': 'bg-blue-100'

}

const Landingpage = () => {
  const navigate = useNavigate();
  const handleExamPortal = () => {
    navigate('/Testing');
  };
  return (
  
    <>
      <Header />

      <Banner />
      <div className='flex  items-center flex-col '>
        <button onClick={handleExamPortal} className="bg-orange-500 text-white py-2 px-4 rounded-full my-4 w-60 h-15 flex justify-center mt-16 text-semibold">
          TAKE A TEST
        </button>
        <p className='text-xl w-3/5 mx-auto text-center'>Ready to showcase your skills? Click 'Take A Test'to embark on a personalised assessment journey.
          Uncover your strengths and open doors to new opportunities with RATE</p>
          <hr className=" my-4 w-2/5 h-10 border-t-2 border-black mx-auto mt-16" />
      </div>
      <div className='text-center text-4xl font-bold mt-20'>4 STEPS FOR TAKING TEST IN RATE</div>
      
      <div className='w-full flex justify-center my-20 '>
        <InfoCard info={'Enter Token Number'} color={colors.blue} />
        <InfoCard circle={0} color={colors.orange} />
        <InfoCard color={colors.yellow} />
        <InfoCard color={colors.red} circle={0} />
      </div>
      <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-700 p-8'>
        <div className='text-center text-4xl font-bold text-white'> RATE ASSESSMENT PLATFORM TUTORIAL</div>
        <div className='flex gap-8 flex-1 items-center justify-center'>
         <div className='flex flex-col w-2/5 items-center justify-center '>
            <div className='text-9xl font-bold text-white'>
              RATE</div>
            <div className='text-xl text-white text-center'>We've prepared a comprehensive video tutorial to guide you through the process of giving assessments
              on the RATE portal.</div>
          </div>
          <div className='bg-white rounded-lg flex-1 aspect-video'>
            <video src={video}  controls></video>
          </div>
       </div>
      </div>
      <div className='h-screen w-screen flex flex-col items-center justify-center mt-8 p-8'>
        <div className='text-4xl text-black font-bold text-center p-4 '>FEATURES OF RATE</div>
        <div className='flex-1 w-full gap-24 flex flex-wrap items-center justify-center '>
          <div className='w-80 h-80 bg-slate-700 rounded-lg'></div>
          <div className='w-80 h-80 bg-slate-700 rounded-lg'></div>
          <div className='w-80 h-80 bg-slate-700 rounded-lg'></div>
          <div className='w-80 h-80 bg-slate-700 rounded-lg'></div>
          <div className='w-80 h-80 bg-slate-700 rounded-lg'></div>
          
        </div>
      </div>
      <div className='flex flex-col gap-8 bg-black mt-20 '>
        <div className='flex justify-center items-center gap-48 border-b-2 p-2'>
          <div className='text-white text-xl'>Home</div>
          <div className='text-white text-xl'>Contact</div>
          <div className='text-white text-xl'>About Us</div>
          <div className='text-white text-xl'>Support</div>
          <div className='text-white text-xl'>Help</div>
        </div>
        <div className=' text-white w-3/5 text-center mx-auto'>
        This website has strict copyright schemes.Anyone found using RATE in any unethical ways without prior permissions
        will be taken legal action by the makers.
        </div>
      </div>
    </>
  );
};

export default Landingpage;

const InfoCard = ({ circle = 1, info, color, icon }) => {
  return <>
    <div className="relative h-[400px] min-w-[300px] p-5 ">
      <div className="w-full h-full bg-white rounded-xl drop-shadow-xl  flex flex-col justify-center items-center ">
        <h1 className='text-3xl'>STEP: 1</h1>
        <div className='text-xl'>
          <h1 >{info}</h1>
        </div>
        <div className='text-xl break-words'>
          <h1 className='text-center'>Enter Token No. Given by email</h1>
        </div>
      </div>
      <div className={`w-28 h-28 bg-yellow-500 absolute ${circle == 1 ? 'top-0' : 'bottom-0'} left-1/2 -translate-x-1/2  ${circle == 1 ? '-translate-y-1/2' : 'translate-y-1/2'} rounded-full`}>
        {/* cicle */}
        <img src={icon} alt="" />
      </div>
      <div className={`w-full h-1/2 ${color} absolute ${circle == 0 ? 'top-0' : 'top-1/2'} left-0 -z-10 ${circle == 0 ? 'rounded-t-xl' : 'rounded-b-xl'} `}>



      </div>

    </div >
  </>
}
