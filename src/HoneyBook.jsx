import React, { useEffect } from 'react';

const HoneyBookWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';

    script.onload = () => {
      window._HB_ = window._HB_ || {};
      window._HB_.pid = '669543216f29f60019e5b586';
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="hb-p-669543216f29f60019e5b586-3"></div>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.honeybook.com/p.png?pid=669543216f29f60019e5b586"
        alt=""
      />
    </div>
  );
};

export default HoneyBookWidget;
