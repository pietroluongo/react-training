import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    const { songs, selectSongFunction } = this.props;
    return songs.map((song) => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            type="button"
            onClick={() => selectSongFunction(song)}
          >Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => ({ songs: state.songs });

export default connect(mapStateToProps, { selectSongFunction: selectSong })(SongList);
