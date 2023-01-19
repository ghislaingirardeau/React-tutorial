import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";
import TheLayout from "./components/TheLayout";
import Home from "./page/Home.jsx";
import ErrorPage from "./page/Error-page.jsx";
import Survey from "./page/Survey.jsx";
import RouterDataPass from "./page/routerDataPass.jsx";
import Faq from "./page/Faq.jsx";

import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TheLayout />, // render the layout in every children route
    errorElement: <ErrorPage />, // to add an error page
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "survey/",
        element: <Survey dataProp="dataProp" />,
      },
      {
        path: "routerDataPass/",
        loader: async () => {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=8e3f600b&s=terminator`
          );
          return await res.json();
        },
        element: <RouterDataPass />,
      },
      {
        path: "routerDataPass/:movieName",
        loader: async ({ params: { movieName } }) => {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=8e3f600b&s=${movieName}`
          );
          return await res.json();
        },
        element: <RouterDataPass />,
      },
      {
        path: "survey/:id",
        element: <Faq />,
      },
      {
        path: "/faq/:id",
        element: <Faq />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Banner /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
