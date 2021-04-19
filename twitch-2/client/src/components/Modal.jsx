import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => ReactDOM.createPortal(
  <div role="none" onClick={() => history.push('/')} className="ui dimmer modals visible active">
    <div role="none" onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
      <div className="header">{props.title}</div>
      <div className="content">
        {props.content}
      </div>
      <div className="actions">
        {props.actions}
      </div>
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
