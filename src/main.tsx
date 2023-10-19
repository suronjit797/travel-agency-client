import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persister, store } from "./app/store";
import { RouterProvider } from "react-router-dom";
import appRoute from "./App";
import { PersistGate } from "redux-persist/integration/react";

// styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/auth.css";
import "./styles/adminLayout.css";
import "./styles/layout.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={appRoute} />
        {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
