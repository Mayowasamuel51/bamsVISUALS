import React, { useEffect } from 'react';

const HoneyBookWidget = ({ pid }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'; // Replace with actual script
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="hb-p">
      <img height="1" width="1" style={{ display: 'none' }} src={`https://www.honeybook.com/p.png?pid=${pid}`} alt="" />
    </div>
  );
};

export default HoneyBookWidget;