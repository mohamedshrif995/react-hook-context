import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// class ToggleTheme extends Component {
//     static contextType = ThemeContext
//     render() {
//         const { toggleTheme } = this.context
//         return (
//             <button onClick={toggleTheme}>toggle theme</button>
//         )
//     }
// }


export const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>toggle theme</button>
    )
}

export default ToggleTheme