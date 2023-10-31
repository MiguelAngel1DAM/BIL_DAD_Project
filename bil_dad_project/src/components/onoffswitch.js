import React, { useState } from 'react';

const Onoff = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button
        onClick={toggleSwitch}
        style={{
          width: '100px',
          height: '50px',
          border: '1px solid #E8E8E8',
          borderRadius: '50px',
          background: isOn ? '#FFFFFF' : '#f6f6f6',
          color: isOn ? 'green' : 'red',
        }}
      >
        {isOn ? 'Power On' : 'Power Off'}
      </button>
    </div>
  );
};

export default Onoff;
