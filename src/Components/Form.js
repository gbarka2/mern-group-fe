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
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={newSong.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="artist"
                        placeholder="Artist"
                        value={newSong.artist}
                        onChange={handleChange}
                    />
                </div>
                    <input 
                        type="text" 
                        name="time"
                        placeholder="Song Length"
                        value={newSong.time}
                        onChange={handleChange}
                    />
                <div>
                    <input type="submit" onClick={handleSubmit}/> 
                </div>
            </form>
        </div>
    )
}

export default Form