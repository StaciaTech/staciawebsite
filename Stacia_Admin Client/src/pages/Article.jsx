import React from 'react';
import Sidebar from '../components/Sidebar';

function Article() {
  return (
    <>
      <div className='px-3 flex'>
        <div className='flex items-center' style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        <div>Article</div>
      </div>
    </>
  );
}

export default Article;
