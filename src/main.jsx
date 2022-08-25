import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Todo from "./Todo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>
);
