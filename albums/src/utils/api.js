const apiHost = 'https://rallycoding.herokuapp.com';

export default {
    async fetchMusicAlbums() {
        try {
            let response = await fetch(apiHost + '/api/music_albums');
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn(error);
        }
    }
};