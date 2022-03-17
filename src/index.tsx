import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyle'
import Providers from './contexts'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
