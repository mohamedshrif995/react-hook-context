import React, { createContext, useState } from 'react'
import { uuid } from 'uuid/v1'
export const BookContext = createContext()

const initValue = [
    { id: 1, title: 'book1' },
    { id: 2, title: 'book2' },
    { id: 3, title: 'book3', },
    { id: 4, title: 'book4', }

]
const BookContextProvider = (props) => {
    const [books, setBooks] = useState(initValue)

    const AddBook = ((title) => {

        setBooks([...books, { title }])

    })
    const RemoveBook = ((id) => {
        return (
            books.filter((book) => book.id !== id)
        )
    })
    return (
        <BookContext.Provider value={{ books, AddBook, RemoveBook }}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider