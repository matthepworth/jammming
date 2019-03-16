/* Refer to Native-HTML folder */

import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  // Step 70
  constructor(props){
  super(props)
	  this.search = this.search.bind(this)
	  this.handleTermChange = this.handleTermChange.bind(this)
  };
	
  search() {
	this.props.onSearch(this.state.searchTerm);
  };

  // Step 71- difficult
  handleTermChange(event) {
  	this.setState({searchTerm: event.target.value })
  };
	
  render() {
    return (
		<div className="SearchBar">
		  {/* Step 73, onChange */}
		  <input 
				placeholder="Enter A Song, Album, or Artist" 
				onChange={this.handleTermChange} />
		  <a>SEARCH</a>
		</div>
    );
  }
}

export default SearchBar;