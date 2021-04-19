import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <div>
      <div className="ui button negative">
        Delete
      </div>
      <div className="ui button">
        Cancel
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
