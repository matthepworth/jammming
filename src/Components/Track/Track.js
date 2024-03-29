/* Refer to Native-HTML folder */

import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
// Step 46, addTrack.bind()
// Step 54, removeTrack.bind()
  constructor(props){
  super(props)
	  this.addTrack = this.addTrack.bind(this);
	  this.removeTrack = this.removeTrack.bind(this);
  }
	
  // Step 45
  addTrack() {
	  this.props.onAdd(this.props.track)
  };
	
  // Step 53
  removeTrack() {
	  this.props.onRemove(this.props.track)  
  };

  //   Step 47, addTrack
  //   Step 55, removeTrack
  //   Extract <a> elements in render
  //      with conditional if/else.
  //      Moved and divided <a> elements.
  addRemoveTracks() {
	  if (this.props.isRemoval) {
          return <a className="Track-action" 
		  	        onClick={this.removeTrack}>
						&#8208;
				 </a>;
        } return <a className="Track-action" 
	  			    onClick={this.addTrack}>
					   &#43;
		         </a>;
  }
	
  render() {
    return (
		<div className="Track">
		  <div className="Track-information">
		  {/* Step 35 */}
			<h3>{this.props.track.name}</h3>
			<p>{this.props.track.artist} | 
			   {this.props.track.album}</p>
		  </div>
		  {/* + or - will go here */}
			   {this.renderAction()}
		</div>
    );
  }
}

export default Track;