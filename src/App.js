import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Applicant from "./components/pages/Applicant";
import Layout from "./components/shared/Layout";
import Interview from "./components/pages/Interview";
import Assesments from "./components/pages/Assesments";
import Login from "./components/Login";
import AddApplicant from "./components/pages/AddApplicant";
import Edit from "./components/pages/Edit";
import LetterTemplates from "./components/pages/LetterTemplates";
import Interviewers from "./components/pages/Interviewers";
import OfferLetters from "./components/pages/OfferLetters";
import Detail from "./components/pages/Detail";
import Candidate from "./components/pages/Candidate";
import Calender from "./components/pages/Calendar";
import AssesmentUserDetail from "./components/AssesmentUserDetail/AssesmentUserDetail";
import MeetingDetail from "./components/MeetingDetail/MeetingDetail";
import Job from "./components/pages/Job";
import JobDomains from "./components/pages/jobChild/JobDomains";
import JobPositions from "./components/pages/jobChild/JobPositions";
import JobApplication from "./components/pages/jobChild/JobApplication";
import JobPosting from "./components/pages/jobChild/JobPosting";
import AddJob from "./components/pages/jobChild/AddJob";
import JobEdit from "./components/pages/jobChild/JobEdit";
import Review from "./components/pages/Review/Review";
import Blacklist from "./components/Blacklist";
import BlacklistDetail from "./components/BlacklistDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Applicant" element={<Applicant />} />
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/Blacklist" element={<Blacklist />} />
          <Route
            path="/Blacklist/BlacklistDetail/:id"
            element={<BlacklistDetail />}
          />
          <Route path="/Interviews" element={<Interview />} />
          <Route path="/Assessments" element={<Assesments />} />
          <Route
            path="/AssesmentUserDetail/:id"
            element={<AssesmentUserDetail />}
          />
          <Route path="/Calendar" element={<Calender />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Job/JobDomains" element={<JobDomains />} />
          <Route path="/Job/JobPositions" element={<JobPositions />} />
          <Route path="/Job/JobPosting" element={<JobPosting />} />
          <Route path="/Job/JobPosting/AddJob" element={<AddJob />} />
          <Route path="/Job/JobPosting/JobEdit/:id" element={<JobEdit />} />
          <Route path="/Job/JobApplication" element={<JobApplication />} />
          <Route path="/LetterTemplates" element={<LetterTemplates />} />
          <Route path="/Interviewers" element={<Interviewers />} />
          <Route path="/MeetingDetail" element={<MeetingDetail />} />
          <Route path="/OfferLetters" element={<OfferLetters />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/AddApplicant" element={<AddApplicant />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
