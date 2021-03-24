import React, {useState} from 'react'
import "./Form.css"

const Form = ({createSong, emptySong}) => {

    const [newSong, setNewSong] = useState(emptySong)

    const handleSubmit = (event) => {
        if (newSong.title !== "" && newSong.artist !== "" && newSong.time !== "") {
            event.preventDefault()
            createSong(newSong)
        } else if (newSong.title === "" && newSong.artist === "" && newSong.time === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's title, artist, length!")
        } else if (newSong.title !== "" && newSong.artist !== "" && newSong.time === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's length!")
        } else if (newSong.time !== "" && newSong.artist !== "" && newSong.title === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's title!")
        } else if (newSong.time !== "" && newSong.title !== "" && newSong.artist === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's artist!")
        } else if (newSong.time !== "" && newSong.title === "" && newSong.artist === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's title and artist!")
        } else if (newSong.time === "" && newSong.title !== "" && newSong.artist === "") {
            event.preventDefault()
            alert("Oops! Please enter your song's artist and time!")
        } else if (newSong.time === "" && newSong.title === "" && newSong.artist !== "") {
            event.preventDefault()
            alert("Oops! Please enter your song's title and time!")
        }
    }

    const handleChange = (event) => {
        setNewSong({...newSong, [event.target.name]: event.target.value})
    }

    return(
        <div className="form-container">
            <h3>Add a New Song</h3>
            <div>
                <form>
                    <div className="text-container">
                        <input 
                            type="text" 
                            name="title"
                            placeholder="Title"
                            value={newSong.title}
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            name="artist"
                            placeholder="Artist"
                            value={newSong.artist}
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            name="time"
                            placeholder="Song Length"
                            value={newSong.time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit-container">
                        <input className="submit-button" type="submit" onClick={handleSubmit}/> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form