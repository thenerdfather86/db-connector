import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { Main } from './Main.js'

const theme = {
	background: '#151B26',
	text: '#DCF4FF',
	linkColor: '#627DB3'
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  *, *:before, *:after {
  }

  body {
    background: ${theme.background}EE;
    color: ${theme.text};
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Main />
		</>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
