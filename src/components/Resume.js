import React from 'react';

const Resume = () => {

  return (
    <div style={{ height: '87vh', overflow: 'hidden'}}>
      <iframe title='Resume'
        src="https://docs.google.com/document/d/e/2PACX-1vT530rNmMZ2dkd3GPnul5hldtf4lC43S-kJElodLSwkVt--oti3640FFNF98xEkveo70twLfTQI8RNa/pub?embedded=true"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 'none' }}
      >
        Loading...
      </iframe>
    </div>
  );
}

export default Resume;
