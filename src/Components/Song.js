import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
import "./Song.css"

const Song = ({song, favoriteSong, deleteSong}) => {

    const handleFavorite = (song) => {
        if (song.playlist_id === 1) {
            song.playlist_id = 2
            // song.color = 'red'
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
                <button className="delete-button" onClick={() => {deleteSong(song)}}><FontAwesomeIcon icon={faTrashAlt} style={{color: 'white'}}/></button>
                {
                song.playlist_id === 1 ?
                <button className="favorite-button" onClick={() => {handleFavorite(song)}}><FontAwesomeIcon icon={faHeart} style={{color: 'white'}}/></button>
                : <button className="favorite-button" onClick={() => {handleFavorite(song)}}><FontAwesomeIcon icon={faHeart} style={{color: 'aquamarine'}}/></button>
                }
            </div>
            
        </div>
    )
}
export default Song