import React from "react"
import Song from './Song'
import "./List.css"

const List = ({playlist, favoriteSong, deleteSong}) => {
    
    return (
        <div className="playlist-div">
            <h2>{playlist.name} Playlist</h2>
            <div className="songs-container">
            {
                playlist !== undefined ?
                playlist.songs.map((song, index) => {
                    return (
                        <Song 
                            song={song}
                            key={index}
                            favoriteSong={favoriteSong}
                            deleteSong={deleteSong}
                        />
                    )
                })
                : "No Songs"
            }
            </div>
        </div>
    )
}

export default List