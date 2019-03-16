/* Refer to Native-HTML folder */
/* Step 34. Somehow didn't work:
	{this.props.tracks.map(track => {
			return <Track key={track.id}/>
		})
	}
*/

import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
		<div className="TrackList">
		{/* Step 34, map() */}
		{/* Step 43, isRemoval */}
		{/* Step 44, onAdd */}
		{/* Step 52, onRemove, isRemoval */}
		   { this.props.tracks.map(track => {
				return <Track key={track.id}
					track={track}
					onAdd={this.props.onAdd}
					onRemove={this.props.onRemove}
					isRemoval={this.props.isRemoval}/>
				})}
		</div>
	);
  }
}

export default TrackList;