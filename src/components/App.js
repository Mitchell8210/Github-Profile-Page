import React from "react"
import { Provider } from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom'
import store from "../store"
import Main from './Main'
import Header from './Header'
import Aside from './Aside'
function App() {
  return (
    <Router>
    <Provider store={store}>
      
      <Header/>
      <Aside/>
      <Main/>
      
    </Provider>
    </Router>
  )
}

export default App
