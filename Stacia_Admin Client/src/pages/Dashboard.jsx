import React, { useState } from "react";
import SubscribeLogo from "../assets/subscriberLogo.svg";
import RiseArrow from "../assets/RiseArrow.svg";
import ArrowRigntCircle from "../assets/arrow-right-circle.svg";
import LigntBulb from "../assets/lightbulb.svg";
import UserLogo from "../assets/User.svg";
import Settings from "../assets/settings.svg";
import Sidebar from "../components/Sidebar";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TopUsers from "../components/TopUsers";
import { users } from "../Data/UsersData";

ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale);

Chart.register(ArcElement);

function Dashboard() {
  const [data] = useState(users);
  const DoughnutData = {
    datasets: [
      {
        label: "#",
        data: [65, 35, 10],
        backgroundColor: ["#581EE7", "#F6DB29", "#FF8433"],
        borderRadius: [5, 5],
        size: [10, 10],
        spacing: 1,
        borderColor: "none",
      },
    ],
  };
  const options = {
    cutout: 70,
  };

  //Graph

  const GraphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const GraphData = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: [80, 65, 75, 60, 70, 65, 85],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#FF8433",
      },
    ],
  };

  return (
    <>
      <div className="flex px-3  ">
        <div className="flex items-center" style={{ height: "100vh" }}>
          <Sidebar />
        </div>
        <div className="w-full ml-5 py-3 ">
          <div className="flex justify-between w-full">
            <div className="text-4xl font-bold font-[Inter]">Hello, User</div>
            <div className="flex items-center">
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-[#EDEDED] rounded-md h-10 w-72 mx-3  focus:outline-none placeholder:px-6"
                  placeholder="searching..."
                />
              </div>
              <div className="mx-3 bg-[#ededed] px-2 py-2  rounded-md">
                <img src={LigntBulb} alt="" />
              </div>
              <div className="mx-3  bg-[#ededed] px-2 py-2  rounded-md">
                <img src={Settings} alt="" />
              </div>
              <div className="ml-3  bg-[#ededed] px-2 py-2  rounded-md">
                <img src={UserLogo} alt="" />
              </div>
            </div>
          </div>

          <div className="px-2">
            <div
              className="flex py-2 justify-center"
              style={{ height: "40%" }}
            >
              <div className="bg-[#581EE7] rounded-2xl w-2/5 p-5">
                <div className="flex justify-between">
                  <div className="text-white text-lg font-medium font-[Inter]">
                    Traffic
                  </div>
                  <div>
                    <img src={RiseArrow} alt="" />
                  </div>
                </div>
                <div className="mt-10">
                  <Line data={GraphData} options={GraphOptions} />
                </div>
              </div>
              <div className="mx-4 flex flex-col w-2/5">
                <div className="bg-[#D1E4FF] rounded-2xl p-5  flex flex-col justify-between">
                  <div className="flex justify-between pb-2">
                    <div className="text-xl font-medium font-[Inter]">
                      Total Subscribers
                    </div>
                    <div>
                      <img src={RiseArrow} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="self-end text-6xl font-bold font-[Inter]">
                      365
                    </div>
                    <div>
                      <img src={SubscribeLogo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex h-full mt-3 w-full">
                  <div className="bg-[#F6DB29] h-full w-2/3 mr-3 rounded-2xl p-5 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="text-xl font-medium font-[Inter]">
                        New Users
                      </div>
                      <div>
                        <img src={RiseArrow} alt="" />
                      </div>
                    </div>
                    <div className="text-7xl font-bold font-[Inter]">+80%</div>
                  </div>
                  <div className="w-1/3 h-full rounded-2xl border-2 border-black flex justify-center items-center ">
                    <img src={ArrowRigntCircle} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-[#1B1D21] rounded-2xl w-1/5 p-3 ">
                <div className="text-white font-medium text-lg font-[Inter]">
                  Stastics
                </div>
                <Doughnut data={DoughnutData} options={options}></Doughnut>
                <div className="flex  ">
                  <dir>
                    <div className="text-white text-lg font-medium font-[Inter]">
                      <span className="px-2 mr-1 rounded-sm bg-[#581EE7]"></span>
                      Old Users
                    </div>
                    <div className="text-white text-lg font-medium font-[Inter]">
                      <span className="px-2 mr-1 rounded-sm bg-[#F6DB29]"></span>
                      New Users
                    </div>
                    <div className="text-white text-lg font-medium font-[Inter]">
                      <span className="px-2 mr-1 rounded-sm bg-[#FF8433]"></span>
                      Users left
                    </div>
                  </dir>
                </div>
                <div className="flex justify-between w-full">
                  <div className="text-white text-lg font-medium font-[Inter]">
                    DATE
                  </div>
                  <div className="text-white text-lg font-medium font-[Inter]">
                    05/23
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-[Jost] font-bold">TOP USERS</p>
          <div>{<TopUsers topUser={data} />}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
