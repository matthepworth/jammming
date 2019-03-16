/* Refer to Native-HTML folder */

import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  // Step 70
  // Needed to Add "this.state"
  constructor(props){
  super(props)
	  this.state = { searchTerm: '' }
	  this.search = this.search.bind(this)
	  this.handleTermChange = this.handleTermChange.bind(this)
  };
	
  search() {
	this.props.onSearch(this.state.searchTerm);
  };

  // Step 71- difficult
  handleTermChange(event) {
  	this.setState({ searchTerm : event.target.value })
  };
	
  render() {
    return (
		<div className="SearchBar">
		  {/* Step 73, onChange */}
		  <input 
				placeholder="Enter Song, Album, or Artist" 
				onChange={this.handleTermChange} />
		  <a onClick={this.search}>SEARCH</a>
		</div>
    );
  }
}

export default SearchBar;