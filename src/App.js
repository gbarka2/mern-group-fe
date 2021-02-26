
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
  // console.log('json data', data)

  const createSong = (newSong) => {
    fetch('https://disney-tunr.herokuapp.com/songs', {
      method: 'post',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(newSong)
    })
  }

  // const favoriteSong = () => {

  // }


  const deleteSong = (song) => {
    fetch('https://disney-tunr.herokuapp.com/songs/' + song.id, {method: 'delete'})
    .then((data) => {
      makeAPICall(data)
    })
}

  return (
    <div className="App">
        <h1>DISNEY TUNR.</h1>
      <h3>Be Our Guests...</h3>
      <hr />
      <main>
        <Switch>
          <Route 
            exact
            path='/'
            render={(rp) =>
              <div>
                {
                  data !== undefined ?
                  // data.map((playlist, index) => {
                  //   // console.log(playlist)
                  //   return (
                      <div>
                        <List 
                          // playlist={playlist}
                          playlist={data[1]}
                          // key={index}
                          deleteSong={deleteSong}
                        />
                      </div>
                  //   )
                  // })
                  : ""
                }
                <Form createSong={createSong} emptySong={emptySong} />
              </div>}>
          </Route>
        </Switch>
      </main>
    </div>
  );




}

export default App;
