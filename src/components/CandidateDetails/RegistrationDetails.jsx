import Transparentlogo from '../../assets/logo-white.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ANIMATION from '../../components/AnimationRate/Animation';
const Registrationdetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const handleSubmit = () => {
    
    navigate('/registration-details/access-page');
};


useEffect(() => {
const delay = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(delay);
}, []);

  return (
 <> {loading && <ANIMATION  />} 
 {/* < ANIMATION/> */}
 
    <div className="">
  
        <header className="bg-gray-600  flex items-center justify-between sm:px-6 ">
        <div className="flex items-center">
          <img src={Transparentlogo} alt="" className=" my-3 w-[142px] h-[48px] md:h-[45px]" />
        </div>
        {/* You can add other header content on the right side if needed */}
     
      </header>
      <div className='bg-stone-900 h-6'></div>
      <div></div>
      <div className="flex justify-center">
        <div className=" w-[94%]  mt-8 rounded-[10px]">
          <h1 className="text-center text-[24px] mt-2 font-inter text-3xl font-extrabold md:font-bold">*Registration Details</h1>
          <form action="" className=''>
            {/* Adding a label and input for Name */}
            <div className="mt-4 mx-6  ">
              <label htmlFor="name" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter your name"
              />
            </div>

       
            {/* Date of Birth */}
            <div className="mt-4 mx-6">
              <label htmlFor="dob" className="block text-[18px] font-bold md:font-medium font-poppins  ">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
              />
            </div>

            {/* Email */}
            <div className="mt-4 mx-6">
              <label htmlFor="email" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none "
                placeholder="Enter your email"
              />
            </div>

            {/* Alternate Email */}
            <div className="mt-4 mx-6">
              <label htmlFor="altEmail" className="block text-[18px] font-semibold md:font-medium font-poppins ">
                Alternate Email:
              </label>
              <input
                type="email"
                id="altEmail"
                name="altEmail"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter alternate email"
              />
            </div>

            {/* Phone Number */}
            <div className="mt-4 mx-6">
              <label htmlFor="phoneNumber" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter your phone number"
              />
            </div>

            {/* Alternate Phone Number */}
            <div className="mt-4 mx-6">
              <label htmlFor="altPhoneNumber" className="block text-[18px] font-bold md:font-medium font-poppins">
                Alternate Phone Number:
              </label>
              <input
                type="tel"
                id="altPhoneNumber"
                name="altPhoneNumber"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter alternate phone number"
              />
            </div>

            {/* Current College/University */}
            <div className="mt-4 mx-6">
              <label htmlFor="college" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Current College/University:
              </label>
              <input
                type="text"
                id="college"
                name="college"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter your current college/university"
              />
            </div>

            {/* Current Program */}
            <div className="mt-4 mx-6">
              <label htmlFor="program" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Current Program:
              </label>
              <input
                type="text"
                id="program"
                name="program"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter your current program example: B.tech"
              />
            </div>

            {/* Year of Completion */}
            <div className="mt-4 mx-6">
              <label htmlFor="completionYear" className="block text-[18px] font-bold md:font-medium font-poppins ">
                Year of Completion:
              </label>
              <input
                type="text"
                id="completionYear"
                name="completionYear"
                className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                placeholder="Enter your year of completion"
              />
            </div>

            {/* Percentage/CGPA */}
<div className="mt-4 mx-6">
  <label htmlFor="percentageCGPA" className="block text-[18px] font-bold md:font-medium font-poppins ">
    Percentage/CGPA:
  </label>
  <div className="flex">
    <select
      id="percentageCGPA"
      name="percentageCGPA"
      className="w-1/2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
    >
      <option value="cgpa">CGPA</option>
      <option value="percentage">Percentage</option>
    </select>
    <input
      type="text"
      id="enterPercentageCGPA"
      name="enterPercentageCGPA"
      className="w-1/2 ml-2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
      placeholder="Enter percentage/CGPA"
    />
  </div>
</div>
            
{/* Class 10 Passing Year */}
<div className="mt-4 mx-6">
  <label htmlFor="class10PassingYear" className="block text-[18px] font-semibold md:font-medium font-poppins ">
    Class 10 Passing Year:
  </label>
  <input
    type="text"
    id="class10PassingYear"
    name="class10PassingYear"
    className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
    placeholder="Enter Class 10 passing year"
  />
</div>

{/* Class 12 Board */}
<div className="mt-4 mx-6">
  <label htmlFor="class12Board" className="block text-[18px] font-bold md:font-medium font-poppins">
    Class 12 Board:
  </label>
  <input
    type="text"
    id="class12Board"
    name="class12Board"
    className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
    placeholder="Enter Class 12 board"
  />
</div>

{/* Percentage/CGPA in Class 12 */}
<div className="mt-4 mx-6">
  <label htmlFor="percentageCGPAClass12" className="block text-[18px] font-bold md:font-medium font-poppins ">
    Percentage/CGPA (Class 12):
  </label>
  <div className="flex">
    <select
      id="percentageCGPAClass12"
      name="percentageCGPAClass12"
      className="w-1/2 px-4 py-2 mt-1 rounded-md border border-gray-300"
    >
      <option value="cgpa">CGPA</option>
      <option value="percentage">Percentage</option>
    </select>
    <input
      type="text"
      id="enterPercentageCGPAClass12"
      name="enterPercentageCGPAClass12"
      className="w-1/2 ml-2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
      placeholder="Enter percentage/CGPA"
    />
  </div>
</div>

{/* Class 12 Passing Year */}
<div className="mt-4 mx-6">
  <label htmlFor="class12PassingYear" className="block text-[18px] font-bold md:font-medium font-poppins ">
    Class 12 Passing Year:
  </label>
  <input
    type="text"
    id="class12PassingYear"
    name="class12PassingYear"
    className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
    placeholder="Enter Class 12 passing year"
  />
</div>

 {/* Submit Button */}
 <div className="mt-8 mx-6 flex justify-end">
  <button
    type="submit" onClick={handleSubmit} 
    className="px-8 py-2 mb-8 bg-gray-600 border border-white text-xl text-white rounded-md focus:outline-none hover:bg-green-200  font-poppins"
  >
    Submit
  </button>
</div>

          </form>
        </div>
      </div>



    </div>
    </>
  );
};

export default Registrationdetails;
