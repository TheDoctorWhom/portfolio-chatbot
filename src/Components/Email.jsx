
import React from 'react';
// import './Email.css';

const Email = () => {

  return (
    <div class="chatbot-linkbox-container">
        <a href="mailto:zak.dutton@gmail.com">
            <div class="chatbot-linkbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24">
                    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z">
                    </path>
                </svg>
            </div>
        </a>
    </div>
  );

}

export default Email;
