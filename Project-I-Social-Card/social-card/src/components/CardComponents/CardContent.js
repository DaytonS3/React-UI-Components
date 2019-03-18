import React from 'react';
import './Card.css';
import BannerImg from './CardBanner';

const CardContent = () => {
    return (
      <div className="banner-bottom">
        <BannerImg />
        
        <p className="BottomP">Get started with React</p>
        <p className="BottomP">
          React makes it painless to make interactive UI's. Design simple views
          for each state in your application.
        </p>
        
        <div>
            <p className="CardLink BottomP">reactjs.org</p>
        </div>
       
         
        
      </div>
    );
  };
  export default CardContent;