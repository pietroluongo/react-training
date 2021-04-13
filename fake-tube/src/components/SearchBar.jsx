import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    const { term } = this.state;
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="videoSearch">Video Search</label>
            <input
              type="text"
              value={term}
              id="videoSearch"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
