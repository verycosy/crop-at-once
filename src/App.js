import React, { Component } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import UploadFiles from "./components/UploadFiles";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <UploadFiles />
        <Footer />
      </>
    );
  }
}

export default App;
