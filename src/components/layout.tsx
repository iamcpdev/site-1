import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
interface Props{
    Title: string
}

const Body = styled.div`
`

class Layout extends React.Component<Props>{
    render(){
        return(
            <div /*className={darkMode ? "dark-mode" : "light-mode"}*/>
                <Head>
                    <title>{this.props.Title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="og:title" content=""/>
                    <meta name="og:description" content=""/>
                </Head>
                <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                    <br/>
                    <div id='content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout