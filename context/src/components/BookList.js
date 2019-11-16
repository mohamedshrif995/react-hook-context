import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { BookContext } from '../context/BookContext'

// class bookList extends React.Component {
//     static contextType = ThemeContext

//     render() {
//         const { isLightTheme, light, dark } = this.context
//         const theme = isLightTheme ? light : dark
//         return (
//             <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>book 1</li>
//                     <li style={{ background: theme.ui }}>book 2</li>
//                     <li style={{ background: theme.ui }}>book 3</li>

//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books, RemoveBook } = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return (
        <div>
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>


                    {books.map(book => {
                        return (


                            <li onClick={() => RemoveBook(book.id)} key={book.id} style={{ background: theme.ui }}>{book.title}</li>

                        )

                    })}
                </ul>
            </div>
        </div>
    )
}

export default BookList
