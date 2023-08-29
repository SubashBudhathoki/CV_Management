import { MdDashboard, MdNoteAlt } from "react-icons/md";
import { FaUserTie, FaPeopleArrows } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GiLetterBomb } from "react-icons/gi";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export const Sidebarlink = [
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <MdDashboard />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Applicants",
    path: "/Applicant",
    icon: <FaUserTie />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Candidate",
    path: "/Candidate",
    icon: <FaUserTie />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Interviews",
    path: "/Interviews",
    icon: <FaPeopleArrows />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Assessments",
    path: "/Assessments",
    icon: <MdNoteAlt />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Calendar",
    path: "/Calendar",
    icon: <BsFillCalendarCheckFill />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Jobs",
    path: "/Job",
    icon: <FcAdvertising />,
    downArrow: <AiFillCaretDown />,
    submenu: true,
    subtitle: [
      { title: "JobDomains", path: "/Job/JobDomains" },
      { title: "JobPositions", path: "/Job/JobPositions" },
      { title: "JobPosting", path: "/Job/JobPosting" },
      { title: "JobApplication", path: "/Job/JobApplication" },
    ],
  },
  {
    title: "OfferLetters",
    path: "/OfferLetters",
    icon: <GiLetterBomb />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "LetterTemplates",
    path: "/LetterTemplates",
    icon: <SlEnvolopeLetter />,
    downArrow: <AiFillCaretDown />,
  },
  {
    title: "Interviewers",
    path: "/Interviewers",
    icon: <MdOutlineEmojiPeople />,
    downArrow: <AiFillCaretDown />,
  },
];
