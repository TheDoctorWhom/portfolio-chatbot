
import React, { useEffect, useState } from 'react';
import Download from './zak_2022_resume.pdf';

const Resume = () => {

  return (
    <div>
      <a href={Download} download={Download}>
          <button>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
