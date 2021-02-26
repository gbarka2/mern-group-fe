import React from "react"
import Song from './Song'


const List = ({playlist, deleteSong}) => {
    console.log(playlist.songs)
    
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
                            deleteSong={deleteSong}
                        />
                    )
                })
                : "No Songs"
            }
            <Song />
        </div>
    )
}

export default List