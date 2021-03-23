import React from "react"
import "./Song.css"

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
        <div className="song-div">
            <div className="song-content-div">
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.time}</p>
            </div>
            <div className="song-button-div">
                <button onClick={() => {deleteSong(song)}}>Delete</button>
                <button onClick={() => {handleFavorite(song)}}>Favorite</button>
            </div>
        </div>
        )
}

export default Song