import React from 'react';

const Resume = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '350vh', overflow: 'hidden', width: '100%' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Resume</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '350vh', width: '150vh', }}> 
        <iframe
          title='Resume'
          src="https://docs.google.com/document/d/e/2PACX-1vTM_JUy1YaGml704lRZkiQ7ZCCncco_9K2qZx-jxrL8PgsinX8gShmoCfVDVs70ZQ/pub?embedded=true"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default Resume;
