import React from 'react';
import './UserNavIcon.css';

function UserNavIcon({ iconUrl }) {
  return (
    <React.Fragment>
      <h2>Great Image</h2>
      <img src={iconUrl} />
    </React.Fragment>
  );
}

export default UserNavIcon;
