import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export class AuthContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthanticated: true
        }
    }
    toggleAuthantitated = () => {
        return this.setState({ isAuthanticated: !this.state.isAuthanticated })
    }
    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuthantitated: this.toggleAuthantitated }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider
