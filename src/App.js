import React from "react";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Routes from "./Routes";

import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
