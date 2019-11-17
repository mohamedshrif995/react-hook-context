import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'

const initialState = [
    { title: 'new song', id: 1 },
    { title: 'old song', id: 2 },
    { title: 'mem song', id: 3 }
]
function SongList() {
    const [songs, setSongs] = useState(initialState)
    const [age, setAge] = useState(1)

    const AddSongs = (title) => {
        return (
            setSongs([...songs, { id: uuid(), title }])

        )
    }
    useEffect(() => {
        console.log('use effect runs', songs)
    }, [songs])
    useEffect(() => {
        console.log('use effect runs', age)
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm AddSongs={AddSongs} />
            <button onClick={() => setAge((prev) => prev + 1)}>add 1 to age:{age}</button>
        </div>
    )
}
export default SongList