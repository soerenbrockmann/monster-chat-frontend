import React, { Fragment } from 'react';

import './InputToDo.css';

const InputToDo = ({ addItem, inputValue, setInputValue }) => {
  return (
    <Fragment>
      <form>
        <input className='input-todo' type='text' value={inputValue} onChange={setInputValue} />
        <button className='button' onClick={addItem}>
          Add Item
        </button>
      </form>
    </Fragment>
  );
};

export default InputToDo;
