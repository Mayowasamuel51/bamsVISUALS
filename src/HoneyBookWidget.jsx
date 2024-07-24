import { useEffect } from 'react';
import PropTypes from 'prop-types';

const HoneyBookWidget = ({ pid }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js'; // Replace with actual script
    script.async = true;
    script.defer = true;
    script.id = "honeybook-widget-script";
    document.head.appendChild(script);

    return () => {
      document.getElementById('honeybook-widget-script')?.remove();
    };
  }, [pid]);

  return (
    <div className="hb-p-669543216f29f60019e5b586-3">
      <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=669543216f29f60019e5b586"/>
    </div>
  );
};

HoneyBookWidget.propTypes = {
  pid: PropTypes.any,
}

export default HoneyBookWidget;