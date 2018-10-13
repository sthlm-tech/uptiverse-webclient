import'./SmallButton.css';
import React from 'react';

const SmallButton = ({text, searchQuery, onClick}) =>{
  const handleClick = (event) =>{
    onClick({searchQuery:searchQuery});
  }
  return (<div className="SmallButton" onClick={handleClick}>{ text }</div>);
}

export default SmallButton;
