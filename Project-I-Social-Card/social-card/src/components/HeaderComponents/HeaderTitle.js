import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';


const HeaderTitle = () => {
    return (
      <div className="header-Title">
        <span className="hOne">Lambda School</span>
        <span className="lDate"> @Lambda School - 26 Jan</span>
        <HeaderContent />
      </div>
      
    )
  };

  export default HeaderTitle;