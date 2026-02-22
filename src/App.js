import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <Head />
          <Body />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
