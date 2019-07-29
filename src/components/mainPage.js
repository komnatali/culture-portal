import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet";
import * as CSS from "./style.css"

const MainPage = () => (
  <React.Fragment>
    <h1>Hello, group 16!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/photographers-list/">Go to photographers list page</Link>
  </React.Fragment>
)

export default MainPage
