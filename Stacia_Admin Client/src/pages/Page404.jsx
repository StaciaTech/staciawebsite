import React from 'react';

function Page404() {
  return (
    <div
      className='flex flex-col items-center justify-center'
      style={{ height: '100vh' }}
    >
      <div className='text-7xl font-bold font-[Inter]'>404</div>
      <div className='text-lg font-[jost] font-semibold text-[#ADADAD] '>
        Page Not Found
      </div>
    </div>
  );
}

export default Page404;
