import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LightBulb from '../assets/lightbulb.svg';
import Settings from '../assets/settings.svg';
import UserLogo from '../assets/User.svg';
import TotalJobs from '../assets/totaljobsIcon.svg';
import TotalApplications from '../assets/totalapplicationIcon.svg';
import Shortlisted from '../assets/shotlistedIcon.svg';
import ApplicantProfileImage from '../assets/applicantProfile.jpg';
import { Jobdata } from '../Data/JobData';

import ReactEcharts from 'echarts-for-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AllJobIcon from '../assets/alljobsIcon.png';

const Jobcontainer = ({ data }) => {
  const { title, experience, jobType, natureOfJob, pay } = data;
  // console.log(Jobdata);
  return (
    <div className='border-2 border-black mx-2 p-3 rounded-lg  font-[Inter]'>
      <div className='flex'>
        <div className='bg-black p-3 rounded-md mx-1'>
          <img src={AllJobIcon} alt='' />
        </div>
        <div>
          <div className='font-bold text-base'>{title}</div>
          <div className='font-medium text-xs'>
            <span className='p-1'>Required</span>
            <span className='p-1'>{experience}</span>
            <span className='p-1'>
              {experience === 'Fresher' ? '' : 'Experience'}
            </span>
          </div>
        </div>
      </div>
      <div className='m-1'>
        <div className='font-medium text-xs'>
          <span className='p-1'>JobType:</span>
          <span className='p-1'>{jobType}</span>
        </div>
        <div className='font-medium text-xs'>
          <span className='p-1'>Nature of job:</span>
          <span className='p-1'>{natureOfJob}</span>
        </div>
        <div className='font-medium text-xs'>
          <span className='p-1'>Pay: </span>
          <span className='p-1'>{pay}</span>
        </div>
      </div>
    </div>
  );
};

function Careers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [jobs] = useState(Jobdata);

  const option = {
    xAxis: {
      type: 'category',
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Arl',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
    },

    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 180,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 100,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 120,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 160,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 80,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 100,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 140,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 120,
            itemStyle: { color: '#D0B712', borderRadius: 5 },
          },
          {
            value: 200,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 120,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
          {
            value: 110,
            itemStyle: { color: '#F2853D', borderRadius: 5 },
          },
        ],
        type: 'bar',
      },
    ],
  };

  return (
    <>
      <div className='px-3 flex'>
        <div className='flex items-center' style={{ height: '100vh' }}>
          <Sidebar />
        </div>

        <div className='w-full ml-3'>
          <div className='flex justify-between w-full py-5'>
            <div className='text-4xl font-bold font-[Sansation]'>Career</div>
            <div className='flex items-center'>
              <div>
                <input
                  type='text'
                  name=''
                  id=''
                  className='bg-[#EDEDED] rounded-md h-10 w-72 mx-3  focus:outline-none placeholder:px-6'
                  placeholder='searching...'
                />
              </div>
              <div className='mx-3 bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={LightBulb} alt='' />
              </div>
              <div className='mx-3  bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={Settings} alt='' />
              </div>
              <div className='ml-3  bg-[#ededed] px-2 py-2  rounded-md'>
                <img src={UserLogo} alt='' />
              </div>
            </div>
          </div>
          <div className='flex w-full'>
            <div style={{ width: '75%' }}>
              <div className='flex w-full'>
                <div className='bg-[#FF8433] w-1/3 p-4 rounded-lg'>
                  <div className='font-[inter] font-medium text-md'>
                    Total Jobs
                  </div>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='text-5xl font-[Inter] font-bold'>46</div>
                    <div>
                      <img src={TotalJobs} alt='' />
                    </div>
                  </div>
                </div>
                <div className='bg-[#D1E4FF] w-1/3 p-4 rounded-lg mx-3'>
                  <div className='font-[inter] font-medium text-md'>
                    Total Application
                  </div>
                  <div className='flex justify-between items-center  mt-5'>
                    <div className='text-5xl font-[Inter] font-bold'>326</div>
                    <div>
                      <img src={TotalApplications} alt='' />
                    </div>
                  </div>
                </div>
                <div className='bg-[#F6DB29] w-1/3 p-4 rounded-lg'>
                  <div className='font-[inter] font-medium text-md'>
                    ShortListed
                  </div>
                  <div className='flex justify-between items-center  mt-5'>
                    <div className='text-5xl font-[Inter] font-bold'>23</div>
                    <div>
                      <img src={Shortlisted} alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#581EE7] mt-3 rounded-lg'>
                <ReactEcharts
                  option={option}
                  className='text-[#F2853D] font-[Inter]'
                />
              </div>
            </div>
            <div
              className=' bg-[#1C1D22] ml-3 rounded-lg'
              style={{ width: '25%' }}
            >
              <div className='text-center text-white font-[Inter] p-3 my-4 font-medium'>
                Recent Application
              </div>
              <div className='flex justify-center'>
                <img
                  src={ApplicantProfileImage}
                  alt=''
                  width={100}
                  height={100}
                  className='bg-[#D0B712] rounded-full border-8 border-white'
                />
              </div>
              <div className='my-8'>
                <div className='font-[Inter] text-white text-center text-2xl font-semibold p-1'>
                  Huma Querishi
                </div>
                <div className='font-[Inter] text-white text-center text-xl font-semibold p-1'>
                  UI / UX Designer
                </div>
              </div>
              <div className='flex justify-center gap-1 2xl:gap-4'>
                <div className='flex flex-col items-center'>
                  <div className='text-white border-4 rounded-full w-16 h-16 flex justify-center items-center border-[#843AB1] font-semibold font-[Inter] text-2xl'>
                    9
                  </div>
                  <div className='text-white font-[inter]'>Figma</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='text-white border-4 rounded-full w-16 h-16 flex justify-center items-center border-[#3B994A] font-semibold font-[Inter] text-2xl'>
                    7.5
                  </div>
                  <div className='text-white text-base font-[inter]'>
                    PhotoShop
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='text-white border-4 rounded-full w-16 h-16 flex justify-center items-center border-[#323D9D] font-semibold font-[Inter] text-2xl'>
                    8.5
                  </div>
                  <div className='text-white text-base font-[inter]'>G.P.A</div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-2 font-[Sansation] font-semibold'>Job roles</div>
          <div className='flex w-full'>
            <div style={{ width: '1000px' }}>
              <Carousel
                responsive={responsive}
                draggable={true}
                showDots={false}
                removeArrowOnDeviceType={['tablet', 'mobile', '']}
                swipeable={true}
              >
                {jobs.map((eachjob, index) => {
                  return <Jobcontainer key={index} data={eachjob} />;
                })}
              </Carousel>
            </div>
            <div className=' w-1/2 px-8 rounded-lg text-white bg-black text-7xl flex items-center justify-center'>
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
