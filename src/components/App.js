import React from "react"
import { Provider } from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom'
import store from "../store"
import Main from './Main'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footerlink'
function App() {
  return (
    <Router>
    <Provider store={store}>
    <Header/>
      <div className="components">
        <div className="aside">
          <Aside/>
        </div>
        <div className="main">
          <Main/>
        </div>
      </div>
      <hr/>
      <Footer/>
    </Provider>
    </Router>
  )
}

export default App
