import React from 'react';

import { NavLink } from 'react-router-dom';

import StaciaLogo from '../assets/staciaLogo.svg';
import PowerLogo from '../assets/power.svg';

function Sidebar() {
  return (
    <>
      <div
        className='bg-[#1C1D22] rounded-xl p-5 flex flex-col justify-between'
        style={{ height: '98vh', width: '280px' }}
      >
        <div className='flex flex-col items-center'>
          <div className='p-4'>
            <img src={StaciaLogo} alt='Logo' />
          </div>
          <div className=' p-2 w-full'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-black bg-white  py-2 w-full rounded-md flex justify-center'
                  : 'text-white bg-none w-full block text-center py-2 '
              }
            >
              <div className='w-1/2'>
                <span className='font-[Jost] text-xl font-bold'>Overview</span>
              </div>
            </NavLink>
          </div>
          <div className=' text-white p-2 w-full'>
            <NavLink
              to='/addservice'
              className={({ isActive }) =>
                isActive
                  ? 'text-black bg-white py-2 w-full rounded-md block text-center  '
                  : 'text-white bg-none w-full block text-center py-2 '
              }
            ><span className='font-[Jost] text-xl font-bold'>Services</span>
              
            </NavLink>
          </div>
          <div className=' text-white  p-3'><span className=' font-[Jost] text-xl font-bold'>Products</span> </div>
          <div className=' text-white  p-3'><span className='font-[Jost] text-xl font-bold'>Projects</span> </div>
          <div className=' text-white  p-3'><span className='font-[Jost] text-xl font-bold'>Articles</span> </div>
          <div className=' text-white  p-3'><span className='font-[Jost] text-xl font-bold'>Careers</span> </div>
          <div className=' text-white  p-3'>
           <span className='font-[Jost] text-xl font-bold'>Case Studies</span> 
          </div>
          <div className=' text-white  p-3'>
            <span className='font-[Jost] text-xl font-bold'>Stacia Wall</span>
          </div>
        </div>
        <div className=' self-center'>
          <button className='bg-[#343434] px-5 py-2 rounded-md'>
            <div className='flex'>
              <div className='pr-2 flex items-center'>
                <img src={PowerLogo} alt='' />
              </div>
              <div className='text-xl text-white font-medium flex items-center'>
                Logout
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
