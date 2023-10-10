import React, { useState } from 'react';
import SubscribeLogo from '../assets/subscriberLogo.svg';
import RiseArrow from '../assets/RiseArrow.svg';
import ArrowRigntCircle from '../assets/arrow-right-circle.svg';
import LigntBulb from '../assets/lightbulb.svg';
import UserLogo from '../assets/User.svg';
import Settings from '../assets/settings.svg';
import Search from '../assets/Search.svg';
import Sidebar from '../components/Sidebar';

import ReactEcharts from 'echarts-for-react';
import TopUsers from '../components/TopUsers';
import { users } from '../Data/UsersData';

function Dashboard() {
  const [data] = useState(users);

  const option = {
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun'],
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      show: false,
    },
    series: [
      {
        data: [20, 80, 8, 23, 13, 19],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#FF8433',
          width: 4,
        },
      },
    ],
  };

  const donughtoption = {
    title: {
      text: '75%',
      left: 'center',
      top: 'center',
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },

        data: [
          { value: 16, itemStyle: { color: '#581EE7' } },
          { value: 23, itemStyle: { color: '#F6DB29' } },
          { value: 61, itemStyle: { color: '#FF8433' } },
        ],
      },
    ],
  };

  return (
    <>
      <div className='flex px-3  '>
        <div className='flex items-center' style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        <div className='w-full ml-5 py-3 '>
          <div className='flex justify-between w-full'>
            <div className='text-4xl font-bold font-[Inter]'>Hello, User</div>
            <div className='flex items-center'>
              <div
                className=' h-full'
                style={{
                  backgroundColor: '#EDEDED',
                  padding: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '5px',
                  // width: '50%',
                }}
              >
                <img src={Search} alt='' />
                <input
                  type='text'
                  name=''
                  id=''
                  style={{ outline: 'none', backgroundColor: '#ededed' }}
                  className=' placeholder:font-[Inter]'
                  placeholder='Search'
                />
              </div>
              <div className='mx-3 bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={LigntBulb} alt='' />
              </div>
              <div className='mx-3  bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={Settings} alt='' />
              </div>
              <div className='ml-3  bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={UserLogo} alt='' />
              </div>
            </div>
          </div>

          <div className='px-2'>
            <div className='flex h-full py-2 justify-center'>
              <div className='bg-[#581EE7] rounded-2xl w-2/5 p-5 xl:h-96 2xl:h-auto'>
                <div className='flex justify-between'>
                  <div className='text-white text-lg font-medium font-[Inter]'>
                    Traffic
                  </div>
                  <div>
                    <img src={RiseArrow} alt='' />
                  </div>
                </div>
                <div className='mt-10 2xl:mt-20'>
                  <ReactEcharts option={option} />
                </div>
              </div>
              <div className='mx-4 flex flex-col w-2/5'>
                <div className='bg-[#D1E4FF] rounded-2xl p-5 2xl:h-96  flex flex-col justify-between'>
                  <div className='flex justify-between pb-2'>
                    <div className='text-xl font-medium font-[Inter]'>
                      Total Subscribers
                    </div>
                    <div>
                      <img src={RiseArrow} alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='self-end text-6xl font-bold font-[Inter]'>
                      365
                    </div>
                    <div>
                      <img src={SubscribeLogo} alt='' />
                    </div>
                  </div>
                </div>
                <div className='flex h-full mt-3 w-full'>
                  <div className='bg-[#F6DB29] h-full w-2/3 mr-3 rounded-2xl p-5 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                      <div className='text-xl font-medium font-[Inter]'>
                        New Users
                      </div>
                      <div>
                        <img src={RiseArrow} alt='' />
                      </div>
                    </div>
                    <div className='text-7xl font-bold font-[Inter]'>+80%</div>
                  </div>
                  <div className='w-1/3  rounded-2xl border-2 border-black flex justify-center items-center '>
                    <img src={ArrowRigntCircle} alt='' />
                  </div>
                </div>
              </div>
              <div className='bg-[#1C1D22] rounded-2xl w-1/5 p-3 xl:h-96 2xl:h-full'>
                <div className='text-white font-medium text-lg font-[Inter]'>
                  Statistics
                </div>
                <div className=' h-40 2xl:h-80 flex items-center my-5'>
                  <ReactEcharts
                    option={donughtoption}
                    className='h-full w-full'
                  />
                </div>
                <div className='flex justify-center'>
                  <div>
                    <div className='text-white text-lg font-medium font-[Inter]'>
                      <span className='px-2 mr-1 rounded-sm bg-[#581EE7]'></span>
                      Old Users
                    </div>
                    <div className='text-white text-lg font-medium font-[Inter]'>
                      <span className='px-2 mr-1 rounded-sm bg-[#F6DB29]'></span>
                      New Users
                    </div>
                    <div className='text-white text-lg font-medium font-[Inter]'>
                      <span className='px-2 mr-1 rounded-sm bg-[#FF8433]'></span>
                      Users left
                    </div>
                  </div>
                </div>
                <div className='flex justify-between w-full mt-3'>
                  <div className='text-white text-lg font-medium font-[Inter]'>
                    DATE
                  </div>
                  <div className='text-white text-lg font-medium font-[Inter]'>
                    SEP/05/23
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className='font-[Jost] font-bold'>TOP USERS</p>

          <div>{<TopUsers topUser={data} />}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
