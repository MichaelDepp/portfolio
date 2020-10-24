import * as React from "react"
import Head from "next/head"
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/theme"
import "../styles/style.css"

const App = ({Component, pageProps}) => {
    console.log("Hello from APP")
    return (
        <ChakraProvider theme={theme}>
                <Head>
                    <title>Michael Depp</title>
                </Head>
                <Component {...pageProps}/>
        </ChakraProvider>
    )
}

export default App;