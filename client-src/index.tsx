import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, lightBlue } from '@material-ui/core/colors'
import App from './components/app'
import { comma } from './utils'

const mountNode = document.getElementById('app')

comma(123)

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, mountNode
)

