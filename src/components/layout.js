import React from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrimarySearchAppBar from "../components/appBar";
import Footer from "../components/footer";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Layout = ({ children }) => (
  <>
    <div className={useStyles().root}>
      <CssBaseline />
      <PrimarySearchAppBar />
      {children}
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;