import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
