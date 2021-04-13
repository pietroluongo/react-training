import { combineReducers } from 'redux';

const songsReducer = () => [
  {
    title: 'Speak to Me',
    duration: '1:05',
  },
  {
    title: 'Breathe (In the Air)',
    duration: '2:49',
  },
  {
    title: 'On the Run',
    duration: '3:45',
  },
  {
    title: 'Time',
    duration: '6:53',
  },
  {
    title: 'The Great Gig in the Sky',
    duration: '4:43',
  },
  {
    title: 'Money',
    duration: '6:22',
  },
  {
    title: 'Us and Them',
    duration: '7:49',
  },
  {
    title: 'Any Colour You Like',
    duration: '3:26',
  },
  {
    title: 'Brain Damage',
    duration: '3:46',
  },
  {
    title: 'Eclipse',
    duration: '2:10',
  },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
