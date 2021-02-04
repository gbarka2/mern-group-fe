import React from 'react'
import { Route } from "react-router-dom"

const Form = (props) => {

    return(
        <div>
            <h3>Add a New Song</h3>
            <form>
                <label for="title">Title</label><br/>
                <input type="text" name="title"/>
                <label for="artist">Artist</label><br/>
                <input type="text" name="artist"/>
                <label for="time">Time</label><br/>
                <input type="text" name="time"/>
                <input type="submit" name="add"/> 
            </form>
        </div>
    )
}

export default Form