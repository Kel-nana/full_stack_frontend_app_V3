import React from 'react';

export const ToggleButton = ({ animation, toggleLightMode }) => {
  const handleToggle = () => {
    toggleLightMode();
  };
 console.log(animation, 'animation')
  return (
    <div className=" body_toggle" onClick={handleToggle} >
      <div >
      <span className={`moon ${animation ? '' : 'animate_left'}`}/>
      </div>
    </div>
  );
};
