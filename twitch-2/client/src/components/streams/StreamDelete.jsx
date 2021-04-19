import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <>
      <div className="ui button negative">
        Delete
      </div>
      <div className="ui button">
        Cancel
      </div>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
