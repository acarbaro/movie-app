import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="movie-app">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
