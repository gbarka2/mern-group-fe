import React from "react"

const Song = ({song, favoriteSong, deleteSong}) => {

    const handleFavorite = (song) => {
        if (song.playlist_id === 1) {
            song.playlist_id = 2
            favoriteSong(song)
        } else {
            song.playlist_id = 1
            favoriteSong(song)
        }
    }

    return (
        <div className="song">
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.time}</p>
            <button onClick={() => {handleFavorite(song)}}>Favorite</button>
            <button onClick={() => {deleteSong(song)}}>Delete Song</button>
        </div>
        )
}

export default Song