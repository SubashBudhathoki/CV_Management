import React, { useState } from "react";
import Widget from "../Widget";
import { MdMarkEmailRead } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import LineChart from "../Chart/LineChart";
import { Chartdata } from "../utils/Chartdata";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: Chartdata.map((data) => data.year),
    datasets: [
      {
        label: "ReactJS",
        data: Chartdata.map((data) => data.ReactJS),
        tension: 0.5,
        // backgroundColor: "rgb(255, 80, 80)",
        //  borderColor: "rgb(255, 80, 80)",
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "white",
      },
      {
        label: "Python",
        data: Chartdata.map((data) => data.Python),
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "white",
      },
      {
        label: "DotNET",
        data: Chartdata.map((data) => data.DotNET),
        tension: 0.2,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "white",
      },
      {
        label: "Quality Assurance",
        data: Chartdata.map((data) => data.QA),
        tension: 0.2,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "white",    
      },
    ],
  });
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex justify-between flex-wrap">
          <Widget
            number="300+"
            title="Member"
            percent="15%"
            icon={<IoIosPeople size={75} />}
          />
          <Widget
            number="49"
            title="Candidate"
            percent="10%"
            icon={<BiSolidUserAccount size={75} />}
          />
          <Widget
            number="$100"
            title="Revenue"
            percent="8%"
            icon={<AiFillDollarCircle size={75} />}
          />
          <Widget
            number="7+"
            title="Email"
            percent="5%"
            icon={<MdMarkEmailRead size={75} />}
          />
        </div>
        <div>
          <LineChart data={userData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
