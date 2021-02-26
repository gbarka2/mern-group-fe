import React, {useState} from 'react'


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
        <div>
            <h3>Add a New Song</h3>
            <form>
                <div>
                    <label for="title">Title</label><br/>
                    <input 
                        type="text" 
                        name="title"
                        value={newSong.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="artist">Artist</label><br/>
                    <input 
                        type="text" 
                        name="artist"
                        value={newSong.artist}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label for="time">Time</label><br/>
                    <input 
                        type="text" 
                        name="time"
                        value={newSong.time}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="submit" onClick={handleSubmit}/> 
                </div>
            </form>
        </div>
    )
}

export default Form