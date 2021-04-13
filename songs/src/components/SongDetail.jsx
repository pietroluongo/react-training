import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <></>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: &ldquo;{song.title}&rdquo;<br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetail);
