import { Link } from "gatsby"
import React from "react";
import "./style.css"
import PrimarySearchAppBar from './appBar';

const MainPage = () => (
  <React.Fragment>
    <PrimarySearchAppBar />
    <h1>Hello, group 16!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/photographers-list/">Go to photographers list page</Link>
  </React.Fragment>
)

export default MainPage
