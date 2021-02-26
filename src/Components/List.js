import React from "react"
import Song from './Song'


const List = ({playlist, favoriteSong, deleteSong}) => {
    
    return (
        <div>
            <h2>{playlist.name} Playlist</h2>
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
    )
}

export default List