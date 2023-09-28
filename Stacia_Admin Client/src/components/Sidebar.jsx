import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import StaciaLogo from '../assets/staciaLogo.svg';
import PowerLogo from '../assets/power.svg';

function Sidebar() {
  const navigate = useNavigate();

  const [isOverviewActive, setIsOverviewActive] = useState(false);
  const [isServiceActive, setIsServiceActive] = useState(false);
  const [isProductActive, setIsProductActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isArticleActive, setisArticleActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);
  const [isCasestudyActive, setIsCasestudyActive] = useState(false);
  const [isStaciawallActive, setIsStaciawallActive] = useState(false);

  useEffect(() => {
    setIsOverviewActive(true);
  }, []);

  const overviewHandler = () => {
    setIsOverviewActive(true);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/');
  };
  const serviceHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(true);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/addservice');
  };
  const productHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(true);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/products');
  };
  const ProjectHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(true);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/project');
  };
  const careerHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(true);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/career');
  };
  const articleHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(true);
    setIsCasestudyActive(false);
    setIsStaciawallActive(false);
    navigate('/article');
  };
  const casestudyHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(true);
    setIsStaciawallActive(false);
    navigate('/casestudy');
  };
  const staciawallHandler = () => {
    setIsOverviewActive(false);
    setIsServiceActive(false);
    setIsProductActive(false);
    setIsProjectActive(false);
    setIsCareerActive(false);
    setisArticleActive(false);
    setIsCasestudyActive(false);
    setIsStaciawallActive(true);
    navigate('/staciawall');
  };

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
            <button
              onClick={overviewHandler}
              className={
                isOverviewActive
                  ? 'text-black bg-white  py-2 w-full rounded-md flex justify-center'
                  : 'text-white bg-none w-full  py-2 flex justify-center'
              }
            >
              <div className='w-1/2'>
                <span className='font-[Jost] text-xl font-bold'>Overview</span>
              </div>
            </button>
          </div>
          <div className=' m-2 w-full'>
            <button
              onClick={serviceHandler}
              className={
                isServiceActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>Services</span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={productHandler}
              className={
                isProductActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className=' font-[Jost] text-xl font-bold'>Products</span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={ProjectHandler}
              className={
                isProjectActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>Projects</span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={articleHandler}
              className={
                isArticleActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>Articles</span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={careerHandler}
              className={
                isCareerActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>Careers</span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={casestudyHandler}
              className={
                isCasestudyActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>
                Case Studies
              </span>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={staciawallHandler}
              className={
                isStaciawallActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex justify-center  '
                  : 'text-white bg-none w-full flex justify-center py-2 '
              }
            >
              <span className='font-[Jost] text-xl font-bold'>Stacia Wall</span>
            </button>
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
