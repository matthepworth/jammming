/* Refer to Native-HTML folder */

import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
  // Step 60
  constructor(props) {
  super(props)
	  this.handleNameChange = this.handleNameChange.bind(this)
  };
	
  // Step 59- very difficult
  // Changed "defaultValue" to
  //   "value" in <input> below.
  handleNameChange(event) {
  	this.props.onNameChange(event.target.value)
  };
	
  render() {
    return (
		<div className="Playlist">
		  {/* Step 61, onChange */}
		  <input 
				value={'New Playlist'}
				onChange={this.handleNameChange} />
		  {/* Step 39, playlistTracks */}
		  {/* Step 51, onRemove */}
		  <TrackList 
				tracks={this.props.playlistTracks}
				onRemove={this.props.onRemove} />
		  	<a className="Playlist-save" 
			   onClick={this.props.onSave}>
					SAVE TO SPOTIFY
			</a>
		</div>
    );
  }
}

export default Playlist;