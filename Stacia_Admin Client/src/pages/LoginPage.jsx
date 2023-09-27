import React from 'react';
import { useState } from 'react';
import EyeOff from '../assets/eye-off.svg';
import LoginFiller from '../assets/LoginFiller.svg';

function LoginPage() {
  const [status, setStatus] = useState(1);

  const forgetHandler = () => {
    setStatus(2);
  };
  const signupHandler = () => {
    setStatus(3);
  };

  return (
    <div className='p-5'>
      <div
        className='bg-[#E9E9E9] rounded-lg p-5 flex '
        style={{ height: '94vh', width: '100%' }}
      >
        <div className='w-1/2 flex justify-center items-center'>
          <div>
            <img src={LoginFiller} alt='error' />
          </div>
        </div>
        <div className='w-1/2 flex justify-end'>
          <div className='bg-white px-24 flex flex-col items-center justify-between h-full rounded-xl '>
            {status === 1 && (
              <div>
                <div className='my-24'>
                  <div>
                    <div className='text-center font-bold text-5xl font-[Inter]'>
                      Welcome Back
                    </div>
                    <div className='text-center text-lg font-medium p-8 font-[Jost]'>
                      Please Enter Your Details
                    </div>
                  </div>
                  <div className='flex  justify-center'>
                    <form>
                      <div className='py-4'>
                        <div className='text-xl font-semibold font-[Inter]'>
                          Email
                        </div>
                        <input
                          type='text'
                          className=' border-b-2 border-[#ADADAD] w-96 focus:outline-none'
                        />
                      </div>
                      <div className='py-4'>
                        <div className='flex justify-between'>
                          <div className='text-xl font-semibold font-[Inter]'>
                            Password
                          </div>
                          <div className='flex items-center'>
                            <img src={EyeOff} alt='' />
                          </div>
                        </div>

                        <input
                          type='text'
                          className=' border-b-2 border-[#ADADAD] w-96 focus:outline-none'
                        />
                      </div>

                      <div
                        className='flex justify-end text-[#ADADAD] text-base font-semibold hover:cursor-pointer font-[Inter]'
                        onClick={forgetHandler}
                      >
                        Forget password ?
                      </div>
                      <div className='py-4'>
                        <button
                          type='submit'
                          className='h-12 w-full rounded-full bg-black text-white font-bold font-[Inter]'
                          onClick={()=>{}}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='text-center text-base text-[#3E3939] pb-8 '>
                  <span className=' font-medium font-[Inter]'>
                    Don’t have an account ?
                  </span>
                  <span
                    className=' font-semibold hover:cursor-pointer font-[Inter] '
                    onClick={signupHandler}
                  >
                    Sign up
                  </span>
                </div>
              </div>
            )}
            {status === 2 && (
              <div className='w-96'>
                <div className='my-24'>
                  <div>
                    <div className='text-center font-bold text-5xl font-[Inter]'>
                      Welcome Back
                    </div>
                    <div className='text-center p-8 font-[Jost] font-medium font-xl'>
                      Verify Admin Access
                    </div>
                  </div>
                  <form>
                    <div className='py-4'>
                      <div className='text-xl font-semibold font-[Inter]'>
                        Email
                      </div>
                      <input
                        type='text'
                        name=''
                        id=''
                        className=' border-b-2 border-[#ADADAD] focus:outline-none w-96'
                      />
                    </div>
                    <div className='py-4'>
                      <div className='text-xl font-semibold font-[Inter]'>
                        Security Key
                      </div>
                      <input
                        type='text'
                        name=''
                        id=''
                        className=' border-b-2 border-[#ADADAD ] focus:outline-none w-96'
                      />
                    </div>
                    <div className='my-8'>
                      <button
                        type='submit'
                        className='w-full h-12 text-white text-xl font-bold bg-black rounded-full font-[Inter]'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className='my-8'>
                    <button
                      type='submit'
                      className='w-full border-2 rounded-full border-black h-12 font-[Inter] text-xl font-bold'
                      onClick={() => {
                        setStatus(1);
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            )}
            {status === 3 && (
              <div className='w-96 '>
                <div className='my-24'>
                  <div>
                    <div className='text-center font-bold text-5xl font-[Inter]'>
                      Welcome Back
                    </div>
                    <div className='text-center text-xl font-medium p-8 font-[Jost]'>
                      Create Your Access
                    </div>
                  </div>
                  <form>
                    <div className='pb-4'>
                      <div className='text-xl font-semibold font-[Inter]'>
                        Email
                      </div>
                      <input
                        type='text'
                        name=''
                        id=''
                        className=' border-b-2 border-[#ADADAD] focus:outline-none w-96'
                      />
                    </div>
                    <div className='py-4'>
                      <div className='text-xl font-semibold font-[Inter]'>
                        Create Password
                      </div>
                      <input
                        type='text'
                        name=''
                        id=''
                        className=' border-b-2 border-[#ADADAD] focus:outline-none w-96'
                      />
                    </div>
                    <div className='py-4'>
                      <div className='text-xl font-semibold font-[Inter]'>
                        Confirm Password
                      </div>
                      <input
                        type='text'
                        name=''
                        id=''
                        className=' border-b-2 border-[#ADADAD] focus:outline-none w-96'
                      />
                    </div>
                    <div>
                      <button className='w-full bg-black text-white rounded-full py-2 font-[Inter] h-12 text-xl font-bold'>
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className='text-center text-base text-[#3E3939] pb-8 '>
                  <span className=' font-medium font-[Inter]'>
                    Already have an account ?
                  </span>
                  <span
                    className=' font-semibold hover:cursor-pointer font-[Inter] '
                    onClick={() => {
                      setStatus(1);
                    }}
                  >
                    Login
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
