import React from 'react';
import './Ads.css';

function Ads(props) {
  return (
    <div className="ads-container">
      <img src={props.image}/>
    </div>
  );
}

export default Ads;
