import React, { useEffect } from 'react';

const NewsletterForm = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '5555369d8f');
    script.src = 'https://dan-gomes.ck.page/5555369d8f/index.js';

    // Select the target element by its class and append the script to it
    const newsletterContainer = document.querySelector('.newsletter-container');
    newsletterContainer.appendChild(script);

    // Function to remove the script when the component unmounts
    const cleanup = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    // Subscribe to the 'beforeunload' event to clean up the script
    window.addEventListener('beforeunload', cleanup);

    return () => {
      // Unsubscribe from the 'beforeunload' event and remove the script
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  return (
    <div className="newsletter-container">
    </div>
  );
};

export default NewsletterForm;




