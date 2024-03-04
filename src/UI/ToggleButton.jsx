import React from 'react';

export const ToggleButton = ({ animation, toggleLightMode }) => {
  const handleToggle = () => {
    toggleLightMode();
  };
 console.log(animation, 'animation')
  return (
    <div className={`body_toggle ${animation ? 'toggle_bg_img' : 'toggle_bg_img_moon'}`} onClick={handleToggle} >
      <div >
      <span className={`moon ${animation ? '' : 'animate_left'}`}/>
      </div>
    </div>
  );
};
