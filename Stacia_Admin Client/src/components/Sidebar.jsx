import React from 'react';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';


import StaciaLogo from '../assets/staciaLogo.svg';
import PowerLogo from '../assets/power.svg';


//sidebar logos

import ArticleBlack from '../assets/articleBlack.svg';
import ArticleWhite from '../assets/articleWhite.svg';
import CareerBlack from '../assets/careerBlack.svg';
import Careerwhite from '../assets/careerWhite.svg';
import CasestudyBlack from '../assets/casestudyBlack.svg';
import CasestudyWhite from '../assets/casestudyWhite.svg';
import OverviewWhite from '../assets/overviewWhite.svg';
import OverviewBlack from '../assets/overviewLogo.svg';
import ProductBlack from '../assets/productBlack.svg';
import ProdcutWhite from '../assets/productsWhite.svg';
import ProjectBlack from '../assets/projectBlack.svg';
import ProjectWhite from '../assets/projectWhite.svg';
import ServiceBlack from '../assets/serviceBlack.svg';
import ServiceWhite from '../assets/serviceWhite.svg';
import Staciawallblack from '../assets/staciawallBlack.svg';
import StaciawallWhite from '../assets/staciawalWhite.svg';

import { Context } from '../provider/Provider';

function Sidebar() {
  const navigate = useNavigate();

  const sidebarStates = useContext(Context);

  const {
    isOverviewActive,
    setIsOverviewActive,
    isServiceActive,
    setIsServiceActive,
    isProductActive,
    setIsProductActive,
    isProjectActive,
    setIsProjectActive,
    isArticleActive,
    setisArticleActive,
    isCareerActive,
    setIsCareerActive,
    isCasestudyActive,
    setIsCasestudyActive,
    isStaciawallActive,
    setIsStaciawallActive,
  } = sidebarStates;

  // const [isOverviewActive, setIsOverviewActive] = useState(false);
  // const [isServiceActive, setIsServiceActive] = useState(false);
  // const [isProductActive, setIsProductActive] = useState(false);
  // const [isProjectActive, setIsProjectActive] = useState(false);
  // const [isArticleActive, setisArticleActive] = useState(false);
  // const [isCareerActive, setIsCareerActive] = useState(false);
  // const [isCasestudyActive, setIsCasestudyActive] = useState(false);
  // const [isStaciawallActive, setIsStaciawallActive] = useState(false);

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
                  ? 'text-black bg-white  py-2 w-full rounded-md flex '
                  : 'text-white bg-none w-full  py-2 flex '
              }
            >
              <div className='flex justify-between ml-10'>
                <img
                  src={isOverviewActive ? OverviewBlack : OverviewWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>Overview</span>
              </div>
            </button>
          </div>
          <div className=' m-2 w-full'>
            <button
              onClick={serviceHandler}
              className={
                isServiceActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex   '
                  : 'text-white bg-none w-full flex  py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isServiceActive ? ServiceBlack : ServiceWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>Services</span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={productHandler}
              className={
                isProductActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex '
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isProductActive ? ProductBlack : ProdcutWhite}
                  alt=''
                  className='pr-2'
                />
                <span className=' font-[Jost] text-xl font-bold'>Products</span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={ProjectHandler}
              className={
                isProjectActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex'
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isProjectActive ? ProjectBlack : ProjectWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>Projects</span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={articleHandler}
              className={
                isArticleActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex'
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isArticleActive ? ArticleBlack : ArticleWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>Articles</span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={careerHandler}
              className={
                isCareerActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex'
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isCareerActive ? CareerBlack : Careerwhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>Careers</span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={casestudyHandler}
              className={
                isCasestudyActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex'
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-between ml-12'>
                <img
                  src={isCasestudyActive ? CasestudyBlack : CasestudyWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>
                  Case Studies
                </span>
              </div>
            </button>
          </div>
          <div className='w-full  m-2'>
            <button
              onClick={staciawallHandler}
              className={
                isStaciawallActive
                  ? 'text-black bg-white py-2 w-full rounded-md flex'
                  : 'text-white bg-none w-full flex py-2 '
              }
            >
              <div className='flex justify-start ml-12'>
                <img
                  src={isStaciawallActive ? Staciawallblack : StaciawallWhite}
                  alt=''
                  className='pr-2'
                />
                <span className='font-[Jost] text-xl font-bold'>
                  Stacia Wall
                </span>
              </div>
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
