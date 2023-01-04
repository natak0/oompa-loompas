import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";

import { setupListeners } from "@reduxjs/toolkit/query";
import { oompasApi } from "./services/oompas";
import "./index.css";

const store = configureStore({
  reducer: { [oompasApi.reducerPath]: oompasApi.reducer },
  // Adding the api middleware to enable caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(oompasApi.middleware),
});
setupListeners(store.dispatch);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
