import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ENTRYSCREEN from './components/EntryScreen/InputTokenPage';
import REGISTRATIONDETAILS from './components/CandidateDetails/RegistrationDetails';
import ACCESSPAGE from './components/AccessPage/Testing';
import RATEPortal from './components/MainPortal/ExamPortal';
import TestDashBoardPage from './components/TestDashboard/Testviewdashboard';
import SubmissionPage from './components/SubmissionPage/SubmitPage';
import ANIMATION from './components/AnimationRate/Animation';
import Registrationdetails from './components/CandidateDetails/RegistrationDetails';
import RateLandingPage from './components/RateLandingPage/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
    {/* <RateLandingPage/> */}
    {/* <Registrationdetails/> */}
      {/* {loading && <ANIMATION  />}  */}
      {/* < ANIMATION/> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<ENTRYSCREEN />} />
          <Route
            path="/registration-details/*"
            element={<REGISTRATIONDETAILS />}
          />
          <Route
            path="/registration-details/access-page/*"
            element={<ACCESSPAGE />}
          />
          <Route
            path="/registration-details/access-page/rate-portal/*"
            element={<RATEPortal />}
          />
          <Route
            path="/registration-details/access-page/rate-portal/test-dashboard/*"
            element={<TestDashBoardPage />}
          />
          <Route
            path="/registration-details/access-page/rate-portal/test-dashboard/submission"
            element={<SubmissionPage />}
          />
        </Routes>
      </Router> */}
      <Router>
  <Routes>
  <Route
      path="/registration-details/access-page/rate-portal/test-dashboard/submission"
      element={<SubmissionPage />}
    />
       <Route
      path="/registration-details/access-page/rate-portal/test-dashboard/*"
      element={<TestDashBoardPage />}
    />
     <Route
      path="/registration-details/access-page/rate-portal/*"
      element={<RATEPortal />}
    />
       <Route
      path="/registration-details/access-page/*"
      element={<ACCESSPAGE />}
    />
   
    <Route
      path="/registration-details/*"
      element={<REGISTRATIONDETAILS />}
    />
 
 
   
 <Route
      path="/Testing/*"
      element={<ENTRYSCREEN />}
    />
 
     <Route path="/" element={<RateLandingPage />} />

  </Routes>
</Router>

    </>
  );
}

export default App;
