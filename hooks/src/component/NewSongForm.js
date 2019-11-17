import React, { useState } from 'react'

export default function NewSongForm({ AddSongs }) {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        AddSongs(title)
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>song name</label>
            <input type='text' required value={title} onChange={e => setTitle(e.target.value)} />
            <input type='submit' value='add song' />

        </form>
    )
}
