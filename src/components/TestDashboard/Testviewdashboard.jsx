import Transparentlogo from '../../assets/logo-white.png';
import { useNavigate } from 'react-router-dom';
const TestDashBoard = () => {

    const navigate = useNavigate();

    const handleSubmission= () => {
      
      navigate('/registration-details/access-page/rate-portal/test-dashboard/submission');
  };
  return (
    <div className="bg-white h-screen">
     

<header className="bg-gray-600  flex items-center justify-between sm:px-6 ">
        <div className="flex items-center">
          <img src={Transparentlogo} alt="" className=" my-3 w-[142px] h-[48px] md:h-[45px]" />
        </div>
  
        <div className="text-white text-2xl font-semibold flex-grow text-center">
          Dashboard
        </div>
      </header>
      <div className='bg-stone-900 h-6'></div>

      <div className="p-4">
      <div className="bg-stone-950 p-4 rounded-md mt-3">
       
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Total Questions</th>
              <th className="px-4 py-2">Answered</th>
              <th className="px-4 py-2">Mark for Review</th>
              <th className="px-4 py-2">Not Visited</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">3</td>
            </tr>
            <tr>
              <th className="text-2xl font-semibold my-4 text-white text-center" colSpan="4">Question Categories Overview</th>
            </tr>

            <tr>
              <th className="text-xl font-semibold my-2 text-white text-left" colSpan="4">SEC A</th>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">15</td>
              <td className="border px-4 py-2 text-left">7</td>
              <td className="border px-4 py-2 text-left">3</td>
              <td className="border px-4 py-2 text-left">5</td>
            </tr>

            <tr>
              <th className="text-xl font-semibold my-2 text-white text-left" colSpan="4">SEC B</th>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">15</td>
              <td className="border px-4 py-2 text-left">7</td>
              <td className="border px-4 py-2 text-left">3</td>
              <td className="border px-4 py-2 text-left">5</td>
            </tr>

            <tr>
              <th className="text-xl font-semibold my-2 text-white text-left" colSpan="4">SEC C</th>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">15</td>
              <td className="border px-4 py-2 text-left">7</td>
              <td className="border px-4 py-2 text-left">3</td>
              <td className="border px-4 py-2 text-left">5</td>
            </tr>

            <tr>
              <th className="text-xl font-semibold my-2 text-white text-left" colSpan="4">SEC D</th>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">15</td>
              <td className="border px-4 py-2 text-left">7</td>
              <td className="border px-4 py-2 text-left">3</td>
              <td className="border px-4 py-2 text-left">5</td>
            </tr>

            {/* Add more sections as needed */}
          </tbody>
        </table>
      </div>
    </div>
      <h1 className='text-center text-xl text-red-800'>**Notice**</h1>

      <div className="p-4">
        <div className="bg-gray-600 p-4 rounded-md mt-3">
          <p className="text-center text-white">You can download a Google Sheet containing your attempted questions and activity summary to submit to <span className='text-black'>supportrate@gmail.com.</span> </p>
          <p className="text-center text-white mt-4">*Please note that any modifications made to the Google Sheet will result in disqualification.</p>
          <p className="text-center text-white mt-4">
         
            <a href="#googleSheet" className="text-stone-950 underline hover:text-green-200">Click here to download</a> the Google Sheet.
          </p>
          <p className="text-center text-white mt-4">
            {/* Download button */}
            <button className="bg-stone-950 hover:bg-green-200 text-white px-8 py-2 rounded-md">
              Download
            </button>
          </p>
        </div>
      </div>
    
      <div className="flex justify-end p-4">
        {/* Move the Submit button to the right */}
        <button onClick={handleSubmission} className="bg-slate-600 hover:text-red-500 hover:bg-red-200 text-white text-xl px-8 py-3 rounded-md">
          Submit
        </button>
      </div>
    </div>

    
  );
};

export default TestDashBoard;
