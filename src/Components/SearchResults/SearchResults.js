/* Refer to Native-HTML folder */

import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
  render() {	  
    return (
		<div className="SearchResults">
		  <h2>Results</h2>
		    {/* Step 33 */}
			{/* Step 43 */}
			<TrackList 
				tracks={this.props.searchResults}
				onAdd={this.props.onAdd} />
		</div>
    );
  }
}

export default SearchResults;