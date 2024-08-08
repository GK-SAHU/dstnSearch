import { Component } from "react";
import DestinationInages from "../DestinationInages";

import "./index.css";

class DestinationSearch extends Component {
  state = {
    searchInput: "",
  };

  onChangeInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;
    const { destinationsList } = this.props;
    const searchResult = destinationsList.filter((eachItems) =>
      eachItems.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="app-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="rearch-container">
            <input
              type="search"
              className="searchinput"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list"> 
            {searchResult.map((eachlistItem) => (
              <DestinationInages
                key={eachlistItem.id}
                eachlistItem={eachlistItem}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default DestinationSearch;
