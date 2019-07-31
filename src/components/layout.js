import React from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrimarySearchAppBar from "../components/appBar";

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <PrimarySearchAppBar />
    { children }
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;