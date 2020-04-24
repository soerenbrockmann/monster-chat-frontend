import React, { Fragment } from 'react';

import './List.css';

const List = ({ listItem }) => {
  const renderListItems = listItem.map((item, index) => <li key={index}>{item}</li>);

  return (
    <Fragment>
      <ul className='list'>{renderListItems}</ul>
    </Fragment>
  );
};

export default List;
