import React, {useState} from 'react'
import "./Form.css"

const Form = ({createSong, emptySong}) => {

    const [newSong, setNewSong] = useState(emptySong)

    const handleSubmit = (event) => {
        event.preventDefault()
        createSong(newSong)
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
                        <input type="submit" onClick={handleSubmit}/> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form