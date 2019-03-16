const spotifyAuthorizeURIBase = 'https://accounts.spotify.com/authorize'
const spotifyAPIURIBase = 'https://api.spotify.com/v1/'
// Step 82
const clientId = 'e6fcab95d31c472aaa8b16a90ef7721f'
// Step 81
// const redirectURI = 'http://localhost:3000/'
// Step 97
const redirectURI = 'https://jammmingapp.surge.sh'

// Step 77
let userAccessToken

// Step 76
const Spotify = {

    getAccessToken() {
        if(userAccessToken) {
            return userAccessToken
        }
		
		// Step 79
        const accessTokenMatch = 		
			  window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = 
			  window.location.href.match(/expires_in=([^&]*)/);

		// Step 80
        if (accessTokenMatch && expiresInMatch) {
            userAccessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            	window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
            	window.history.pushState('Access Token', null, '/');
            return userAccessToken;
        } else {
			// Step 83
            const spotifyAuthorizeURI = `${spotifyAuthorizeURIBase}?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = spotifyAuthorizeURI;
        }

    },

	// Step 85
    search(userSearchTerm) {
        const userAccessToken = Spotify.getAccessToken();
		// Step 86
        const searchRequest = `${spotifyAPIURIBase}search?type=track&q=${userSearchTerm}`
        return fetch(searchRequest, {
            headers : {
                Authorization : `Bearer ${userAccessToken}`
            }
        }).then(response => {
			// Step 87- extremely difficult
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id : track.id,
                name : track.name,
                artist : track.artists[0].name,
                album : track.album.name,
                uri : track.uri,
            }));
        });
    },

	// Step 90
    savePlaylist(playlistName, trackUris) {
        if (!playlistName || !trackUris.length) {
            return;
        }

		// Step 91
        const userAccessToken = Spotify.getAccessToken();
        const headers = { Authorization : `Bearer ${userAccessToken}` }
        let userId
		// Step 92, fetch #1
		// Step 94, fetch #2
        return fetch(`${spotifyAPIURIBase}me`, {headers : headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`${spotifyAPIURIBase}users/${userId}/playlists`, {
                headers : headers,
                method : 'POST',
                body : JSON.stringify({name : playlistName})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`${spotifyAPIURIBase}users/${userId}/playlists/${playlistId}/tracks`, {
                    headers : headers,
                    method : 'POST',
                    body : JSON.stringify({uris: trackUris})
                });
            });
        });
    }
}

// Step 76
export default Spotify