import React from "react"
import { Route } from "react-router-dom"

const Song = ({song, deleteSong}) => {
    console.log(song)








    // {
    //     song !== undefined ?

        return (
        <div className="song">
            {/* <p>{song.title}</p> */}
            <p>Artist Name</p>
            <p>Length</p>
            <button>Add To Favorites</button>
            <button onClick={() => {deleteSong(song)}}>Delete Song</button>
        </div>
        )
    //     : "No Songs"
    // }
}

export default Song

// <div>
// <p>{song.title}</p>
// <p>Artist Name</p>
// <p>Length</p>
// <p>Favorite heart</p>
// </div>