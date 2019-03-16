/* Refer to Native HTML folder */

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './AppStyles.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
// Step 88
import Spotify from '../../util/Spotify.js';


class App extends Component {
  constructor(props){
  super(props);
	  	this.state = {
			searchResults : [
				{
				  name :'Addicted to Love',
				  artist :'Robert Palmer',
				  album :'Riptide',
				  id :'0000001',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000002',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000003',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000004',
				},
			],
			
			// Step 37
			playlistName : 'New Playlist',
            playlistTracks : [
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000005',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000006',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000007',
				}, 
				{
				  name :'',
				  artist :'',
				  album :'',
				  id :'0000008',
				},
			],
		};
	  
		  // Each .bind in the following 
		  //   steps must be included inside 
		  //   of the App constructor.

		  // Step 42
		  this.addTrack = this.addTrack.bind(this);

		  // Step 50
		  this.removeTrack = this.removeTrack.bind(this);

		  // Step 58
		  this.updatePlaylistName = this.updatePlaylistName.bind(this);
	  
	  	  // Step 64
		  this.savePlaylist = this.savePlaylist.bind(this);
	  
	  	  // Step 68
		  this.search = this.search.bind(this);
  	  };
	
	
	  // Step 41
	  addTrack(track) {
		 if (this.state.playlistTracks.findIndex(savedTrack => 	
			 savedTrack.id === track.id)) {
		  		return;
		 	 }
	  };
	
	  // Step 49
	  removeTrack(track) {
	  	const trackIndex = this.state.playlistTracks.findIndex(_track => 
		    _track.id === track.id);
        if(trackIndex > -1) {
            let tracks = this.state.playlistTracks
            tracks.splice(trackIndex, 1)
            this.setState({playlistTracks: tracks})
        }
	  };
	
	  // Step 57
	  updatePlaylistName(name) {
	  	this.setState({playlistName : name})
	  };
	
	  // Step 63- difficult
	  // Step 95- difficult
	  savePlaylist() {
		const trackURIs = this.state.playlistTracks;
		Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
		  this.setState(
			{
			  playlistName: 'New Playlist',
			  playlistTracks: [],
			})
		})
	  };
	
	  // Step 67, console.log
	  // Step 88, Spotify.search
	  search(searchTerm) {
	  	// console.log(searchTerm)
		Spotify.search(searchTerm).then(tracks => {
            this.setState({
                searchResults : tracks
            })
        });
	  };
	
	  render() {
		return (
		  <div>
		  <h1>Ja<span className="highlight">mmm</span>ing</h1>
		  <div className="App">
			<SearchBar onSearch={this.search} />
			<div className="App-playlist">
				{/* Step 42, addTrack */}
				<SearchResults 
					searchResults=		
						{this.state.searchResults}
					onAdd={this.addTrack}
					/>
			    {/* Step 38, playlistName */}
			    {/* Step 50, onRemove */}
				{/* Step 64, onSave */}
				<Playlist 
					playlistName=
						{this.state.playlistName}
					playlistTracks=
						{this.state.playlistTracks}
					onRemove= 
						{this.removeTrack} 
					onNameChange=
						{this.updatePlaylistName} 
					onSave=
						{this.savePlaylist} />
			</div>
		  </div>
		</div>
		);
	  }
	}

export default App;