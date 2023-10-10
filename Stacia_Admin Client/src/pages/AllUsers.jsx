import React, { useState } from 'react';
import { users } from '../Data/UsersData';
import DefaultImage from '../assets/DefaultImage.png';
import BackBtn from '../assets/BackBtn.svg';
import FilterLogo from '../assets/FilterLogo.png';
import MoreIcon from '../assets/MoreIcon.png';
import ProfileIcon from '../assets/profileIcon.svg';
import BinIcon from '../assets/BinIcon.svg';
import { useNavigate } from 'react-router-dom';
import Search from '../assets/Search.svg';

function AllUsers() {
  const history = useNavigate();
  const [data] = useState(users);
  return (
    <>
      <div className='px-10'>
        <button className=' my-8'>
          <img
            src={BackBtn}
            alt=''
            onClick={() => {
              history('/');
            }}
          />
        </button>
        <div className='py-3 px-1 flex justify-between'>
          <div className='text-3xl font-[SansationBold] font-bold'>
            All users
          </div>
          <div className='flex'>
            <div className='mr-3 border-2 flex items-center border-black rounded-md h-full'>
              <img src={Search} alt='' className='px-1' />
              <input
                type='text'
                name=''
                id=''
                placeholder='Search'
                className=' focus:outline-none placeholder:font-[Inter]'
              />
            </div>
            <div className='text-white bg-black rounded-md px-6 py-2 flex items-center justify-center'>
              <img src={FilterLogo} alt='' />
              <span className='px-2 text-sm font-bold font-[Inter]'>
                Filter
              </span>
            </div>
          </div>
        </div>

        <div className='shadow-sm pt-3 rounded-md border'>
          <div className='grid grid-cols-6 justify-between pb-3'>
            <div className=' grid justify-center text-base font-normal font-[Inter]'>
              User
            </div>
            <div className=' flex justify-center text-base font-normal font-[Inter]'>
              Status
            </div>
            <div className=' flex justify-center text-base font-normal font-[Inter]'>
              Email
            </div>
            <div className=' flex justify-center text-base font-normal font-[Inter]'>
              Posts
            </div>
            <div className=' flex justify-center text-base font-normal font-[Inter]'>
              Responces
            </div>
            <div className=' flex justify-center '></div>
          </div>
          <hr />
          <div>
            {data.map((eachUser, id) => {
              return (
                <div key={id}>
                  <UserContainer eachUser={eachUser} key={id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
function UserContainer({ eachUser, key }) {
  const history = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { user, subscription, posts, image, responces, Email, name } = eachUser;

  return (
    <>
      <div className='grid grid-cols-6 justify-between py-3'>
        <div className=' grid justify-start pl-10  '>
          <div className='flex '>
            <div className='w-10 h-10 flex items-center '>
              <img
                src={image ? image : DefaultImage}
                alt='user'
                className='rounded-full '
              />
            </div>
            <div className='flex flex-col justify-center px-2 pl-9'>
              <div className='text-base font-normal font-[Inter]'>{name}</div>
              <div className='text-sm font-normal font-[Inter]'>{user}</div>
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <div
            className={
              subscription
                ? ' bg-black text-white text-base font-normal rounded-full font-sm w-2/3 flex justify-center py-1 font-[Inter]'
                : ' border-2 border-black text-base font-normal rounded-full font-sm w-2/3 flex justify-center py-1 font-[Inter]'
            }
          >
            {subscription ? 'subscriber' : 'contributer'}
          </div>
        </div>
        <div className=' flex justify-center items-center text-base font-normal font-[Inter]'>
          {Email}
        </div>
        <div className=' flex justify-center items-center text-base font-normal font-[Inter]'>
          {posts}
        </div>
        <div className=' flex justify-center items-center text-base font-normal font-[Inter]'>
          {responces}
        </div>
        <div className=' flex justify-center items-center text-base font-normal'>
          <img
            src={showMenu ? '' : MoreIcon}
            className='image'
            alt=''
            onMouseOver={() => setShowMenu(true)}
            onMouseOut={() => setShowMenu(false)}
          />
          {showMenu && (
            <div
              className='shadow px-3 absolute'
              // style={showMenu ? { visibility: "hidden" }:" "}
              onMouseOver={() => setShowMenu(true)}
              onMouseOut={() => setShowMenu(false)}
            >
              <div
                className='flex items-center p-2'
                onClick={() => {
                  history('/userProfile');
                }}
              >
                <img src={ProfileIcon} alt='' srcSet='' />
                <span className='font-[Inter] text-xs font-medium px-1 cursor-pointer'>
                  View
                </span>
              </div>
              <div className='flex items-center p-2'>
                <img src={BinIcon} alt='' />
                <span className='font-[Inter] text-xs font-medium px-1 cursor-pointer'>
                  Delete
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

export default AllUsers;
