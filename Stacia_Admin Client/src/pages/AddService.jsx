import React from 'react';

import Sidebar from '../components/Sidebar';

function AddService() {
  return (
    <>

      <div className='px-3 flex'>
        <div className='flex items-center' style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        <div>service</div>

      </div>
    </>
  );
}

export default AddService;
