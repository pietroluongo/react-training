import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => ReactDOM.createPortal(
  <div role="none" onClick={() => history.push('/')} className="ui dimmer modals visible active">
    <div role="none" onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
      <div className="header">Delete Stream</div>
      <div className="content">
        Are you sure you want to delete the stream?
      </div>
      <div className="actions">
        <button className="ui primary button" type="button">Delete</button>
        <button className="ui button" type="button">Cancel</button>
      </div>
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
