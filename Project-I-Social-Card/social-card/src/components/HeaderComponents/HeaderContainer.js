import React from 'react';
import './Header.css';
import HeaderImage from "./ImageThumbnail";
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = () => {
    return (
      <div className="Header">
        <HeaderImage />
        <HeaderTitle />
        
      </div>
    );
  };

  export default HeaderContainer;