
import React, { useEffect, useState } from 'react';
import Download from './zak_2022_resume.pdf';

const Resume = () => {
  const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImageUrl(data.message);
  //     });
  // }, []);

  return (
    <div>
      <a href={Download} download={Download}>
          <button>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
