
import React, { useEffect, useState } from 'react';

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
      <a href="./zak+2021+resume.pdf" download="zak+2021+resume.pdf">
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
