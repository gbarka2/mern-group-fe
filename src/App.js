import './App.css';
import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Form from './Components/Form'
import List from './Components/List'



function App() {

  const emptySong = {
    title: '',
    artist: '',
    time: '',
    playlist_id: 1
  }

  const [data, setData] = useState()
  
  const makeAPICall = async () => {
    try {
      const res = await fetch('https://disney-tunr.herokuapp.com/playlists')
      const json = await res.json()
      setData(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])

  const createSong = (newSong) => {
    fetch('https://disney-tunr.herokuapp.com/songs', {
      method: 'post',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(newSong)
    })
    .then((data) => {
      makeAPICall(data)
    })
  }

  const favoriteSong = (song) => {
    fetch('https://disney-tunr.herokuapp.com/songs/' + song.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(song)
    })
    .then((data) => {
      makeAPICall(data)
    })
  }


  const deleteSong = (song) => {
    fetch('https://disney-tunr.herokuapp.com/songs/' + song.id, {method: 'delete'})
    .then((data) => {
      makeAPICall(data)
    })
}

  return (
    <div className="App">
      <div className="title-container">
        <h1>DISNEY TUNR.</h1>
        <h3>Be Our Guests</h3>
      </div>
      <main>
        <Switch>
          <Route 
            exact
            path='/'
            render={(rp) =>
              <div className="main-container">
                <div className="playlist-container">
                {
                  data !== undefined ?
                  data.map((playlist, index) => {
                    return (
                      <div>
                        <List 
                          playlist={playlist}
                          key={index}
                          favoriteSong={favoriteSong}
                          deleteSong={deleteSong}
                        />
                      </div>
                    )
                  })
                  : ""
                }
                </div>
                <div className="form-div">
                  <Form createSong={createSong} emptySong={emptySong} />
                </div>
              </div>}>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
