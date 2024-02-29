import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import ErrorPage from "./error.tsx"

import Header from "./navigation/Header.tsx"

import Library from "./books/Library.tsx"
import Find from "./books/Find.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/find",
    element: <Find />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="global-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);