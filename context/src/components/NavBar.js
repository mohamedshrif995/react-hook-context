import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

// class navBar extends React.Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isAuthanticated, toggleAuthantitated } = authContext
//                     const { isLightTheme, light, dark } = themeContext
//                     const theme = isLightTheme ? light : dark
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.syntax }}>
//                             <h1>context app</h1>
//                             <div onClick={toggleAuthantitated}>
//                                 {
//                                     isAuthanticated ? <p>loged in </p> : <p>logout</p>
//                                 }
//                             </div>
//                             <ul>
//                                 <li >home</li>
//                                 <li >about</li>
//                                 <li >contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         )
//     }


// }

export const NavBar = () => {
    const { isAuthanticated, toggleAuthantitated } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>context app</h1>
            <div onClick={toggleAuthantitated}>
                {
                    isAuthanticated ? <p>loged in </p> : <p>logout</p>
                }
            </div>
            <ul>
                <li >home</li>
                <li >about</li>
                <li >contact</li>
            </ul>
        </nav>
    )
}

export default NavBar