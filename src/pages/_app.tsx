import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../themes/theme'

const GlobalStyle = createGlobalStyle`
    body{
        background-color: white;
    }
`

class Site extends App{
    render(){
        const { Component, pageProps } = this.props
        return(
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        )
    }
}

export default Site